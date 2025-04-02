<template>
  <div v-if="needSummary" class="ai-summary">
    <div class="ai-summary-container">
      <div class="ai-summary-title">
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' fill-rule='evenodd'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z'/><path fill='black' d='M5.827 13.004a.19.19 0 0 1 .346 0l.17.371a8.693 8.693 0 0 0 3.3 3.638l.265.155a.181.181 0 0 1 0 .316l-.265.155a8.693 8.693 0 0 0-3.3 3.638l-.17.372a.19.19 0 0 1-.346 0l-.17-.372a8.693 8.693 0 0 0-3.3-3.638l-.265-.155a.181.181 0 0 1 0-.316l.265-.155a8.693 8.693 0 0 0 3.47-4.01Zm.17 3.486l-.175.206c-.125.14-.253.277-.385.41l-.2.198l-.027.024l.227.223l.195.203l.19.208l.175.205l.175-.205c.125-.14.253-.278.385-.411l.227-.223l-.027-.024c-.135-.13-.267-.263-.395-.4l-.19-.208zm8.476-13.76a.331.331 0 0 1 .605 0l.15.336l.148.314l.195.39l.226.42l.112.196a15.214 15.214 0 0 0 3.895 4.437l.427.317a15.192 15.192 0 0 0 1.383.878a.317.317 0 0 1 0 .553a15.258 15.258 0 0 0-1.082.67l-.36.251a15.213 15.213 0 0 0-4.263 4.71l-.131.232a14.95 14.95 0 0 0-.402.775l-.147.314l-.15.336a.331.331 0 0 1-.606 0l-.15-.336l-.148-.314l-.196-.39l-.225-.42l-.113-.196a15.214 15.214 0 0 0-3.894-4.437l-.428-.316a15.153 15.153 0 0 0-1.382-.88a.317.317 0 0 1 0-.552a15.298 15.298 0 0 0 1.082-.669l.36-.252a15.215 15.215 0 0 0 4.262-4.71l.132-.232c.141-.254.275-.512.402-.775l.147-.314zm.302 3.615a17.215 17.215 0 0 1-3.663 3.95a17.214 17.214 0 0 1 3.663 3.95a17.212 17.212 0 0 1 3.663-3.95a17.213 17.213 0 0 1-3.663-3.95'/></g></svg>
        <span>AI 生成的摘要</span>
      </div>
      <div class="ai-summary-content">
        <p v-if="summary">
          {{ summary }}<span v-if="isGenerating" class="typing-cursor"></span>
        </p>
        <p v-else>
          <span v-if="apiSuccess">AI 正在生成摘要...</span>
          <span v-else>生成摘要失败</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress';
import { ref, watch, onMounted } from 'vue';

const apiSuccess = ref(true); // 是否请求成功
const needSummary = ref(true); // 是否需要生成摘要
// 添加一个变量来存储当前的取消令牌
const abortController = ref<AbortController | null>(null);
// 添加一个变量来跟踪是否正在生成摘要
const isGenerating = ref(false);

async function getChatResponse(message) {
  apiSuccess.value = true;
  needSummary.value = true;
  isGenerating.value = true; // 开始生成时设置为true
    // 如果存在之前的请求，则取消它
    if (abortController.value) {
      abortController.value.abort();
    }
    // 创建新的AbortController
    abortController.value = new AbortController();

    const response = await fetch('https://api.dify.ai/v1/chat-messages', {
      method: 'POST',
      headers: {
        // TODO: 需要从环境变量中获取
        'Authorization': 'Bearer app-KmcANJH856Esef6MKHEzI9A9',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: message,
        inputs: {},
        response_mode: "streaming",
        user: "vitepress-user"
      }),
      signal: abortController.value.signal
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // 处理流式响应
    const reader = response.body?.getReader()
    if (!reader)
      return

    const decoder = new TextDecoder()
    let buffer = ''
    let bufferObj: Record<string, any>

    async function read() {
      let hasError = false
      const { done, value } = await reader!.read()
      if (done) {
        isGenerating.value = false
        return
      }

      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      try {
        lines.forEach((message) => {
          if (message.startsWith('data: ')) {
            try {
              bufferObj = JSON.parse(message.substring(6)) as Record<string, any>
            }
            catch (e) {
              console.error(e)
              return
            }

            if (bufferObj.answer && (bufferObj.event === 'message' || bufferObj.event === 'agent_message')) {
              // 普通内容直接添加到 content
              summary.value += bufferObj.answer
            }
          }
        })
        buffer = lines[lines.length - 1]
      }
      catch (e) {
        console.error(e)
        hasError = true
        return
      }
      if (!hasError) {
        read()
      }
      else {
        isGenerating.value = false
      }
    }
    read()
  }

const route = useRoute();

const summary = ref('');

// 抽离获取摘要的方法
async function fetchSummary() {
  summary.value = '';
  setTimeout(async () => {
    const content = (document.getElementsByClassName('vp-doc')[0] as HTMLElement)?.innerText;
    if (content) {
      // 去除标点符号和换行字符，保留中英文内容
      let cleanContent = content.replace(/[^\w\u4e00-\u9fa5]/g, '');
      try {
        await getChatResponse(cleanContent);
      } catch (error) {
        console.error('获取AI摘要失败:', error);
      }
    } else {
      console.error('无法获取MD文件内容');
      needSummary.value = false;
    }
  }, 800);
}

// 监听路由变化时获取摘要
watch(() => route.path, fetchSummary);

// 组件挂载时获取摘要
onMounted(() => {
  fetchSummary();
});

</script>

<style scoped>
.ai-summary {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
.ai-summary-container {
  width: 100%;
  max-width: 700px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s ease, box-shadow 0.5s ease;
}
.ai-summary-title {
  width: 100%;
  padding: 10px;
  display: flex;
  color: #3F3F46;
  font-size: 18px;
  font-weight: 600;
  transition: color 0.5s ease;
}
.ai-summary-content {
  width: 100%;
  padding: 10px;
  line-height: 1.7;
  font-size: 16px;
  color: #71717A;
  transition: color 0.5s ease;
}

.typing-cursor {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: currentColor;
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* 添加暗色模式样式 */
:root.dark .ai-summary-container {
  background-color: #1a1a1a;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}

:root.dark .ai-summary-title {
  color: #e5e5e5;
}

:root.dark .ai-summary-content {
  color: #a1a1aa;
}

:root.dark .ai-summary-logo {
  filter: invert(1);
}

.ai-summary-logo {
  transition: filter 0.5s ease;
}

/* 暗色模式下的光标样式 */
:root.dark .typing-cursor {
  background-color: #a1a1aa;
}
</style>
