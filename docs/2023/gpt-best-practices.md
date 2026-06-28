# GPT 最佳实践 

原文章地址：<https://platform.openai.com/docs/guides/gpt-best-practices>


这篇指南分享了从GPTs获得更好结果的策略和方法。这里描述的方法有时可以组合使用以获得更好的回复。我们鼓励用户对GPT进行问答实验，找出最适合您的提问方法。

这里展示的一些示例目前仅适用于我们最强大的模型，gpt-4。如果您还没有使用gpt-4的权限，可以考虑加入等待名单。一般来说，如果你发现一个GPT模型在任务中失败，而有一个更强大的模型可用，那么再用更强大的模型尝试一次通常是值得的。

## 获得更好结果的六种策略

### 1. 提供清晰的指令

GPTs不能读懂你的想法。如果输出结果过长，可以要求简洁回答。如果输出结果过于简单，可以要求专家级别的写作。如果你不喜欢格式，可以展示你想看到的格式。GPTs对你想要的东西猜测的越少，你得到它的可能性就越大。

方法：

+ [在查询中包含细节以获得更相关的答案](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-include-details-in-your-query-to-get-more-relevant-answers)
+ [让模型采取一种人格](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-ask-the-model-to-adopt-a-persona)
+ [使用分隔符清楚地指出输入的不同部分](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-use-delimiters-to-clearly-indicate-distinct-parts-of-the-input)
+ [指定完成任务所需的步骤](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-specify-the-steps-required-to-complete-a-task)
+ [提供示例](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-provide-examples)
+ [指定期望输出的长度](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-specify-the-desired-length-of-the-output)

### 2. 提供参考文本

GPTs可能会自信地提供虚假的答案，尤其是在被问到深奥的话题或要求提供引文和URL时。就像一张笔记可以帮助学生在考试中取得更好的成绩一样，向GPTs提供参考文本可以帮助它们更少地提供虚构的答案。

方法：

+ [指示模型使用参考文本来回答](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-instruct-the-model-to-answer-using-a-reference-text)
+ [指示模型使用参考文本中的引文来回答](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-instruct-the-model-to-answer-with-citations-from-a-reference-text)

### 3. 将复杂任务分解为简单的子任务

和软件工程中的良好实践一样，将复杂的系统分解为一系列模块化的组件，同样适用于提交给GPTs的任务。复杂的任务比简单的任务有更高的错误率。此外，复杂的任务通常可以重新定义为一系列简单任务的工作流，其中早期任务的输出用于构建后期任务的输入。

方法：

+ [使用意图分类来识别用户查询的最相关指令](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-use-intent-classification-to-identify-the-most-relevant-instructions-for-a-user-query)
+ [对需要进行非常长的对话的对话应用，对之前的对话进行概括或过滤](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-for-dialogue-applications-that-require-very-long-conversations-summarize-or-filter-previous-dialogue)
+ [逐块概括长文档，递归地构建完整的概括](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-summarize-long-documents-piecewise-and-construct-a-full-summary-recursively)

### 4. 给GPTs时间去“思考”

如果被要求将17乘以28，你可能不会立刻知道答案，但是可以花时间计算出来。同样，GPTs在立刻尝试回答而不是花时间思考答案时会出现更多的推理错误。要求提供一个推理链条再给出答案，可以帮助GPTs更可靠地推理出正确的答案。

方法：

+ [指示模型在冲动下结论之前先找出自己的解决方案](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-instruct-the-model-to-work-out-its-own-solution-before-rushing-to-a-conclusion)
+ [使用内部对话或一系列查询来隐藏模型的推理过程](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-use-inner-monologue-or-a-sequence-of-queries-to-hide-the-model-s-reasoning-process)
+ [询问模型在之前的回合中是否漏掉了什么](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-ask-the-model-if-it-missed-anything-on-previous-passes)

### 5. 使用外部工具

通过使用其他工具的输出来补偿GPTs的弱点。例如，文本检索系统可以告诉GPTs关于相关文档的信息。代码执行引擎可以帮助GPTs进行数学计算和运行代码。如果一个任务可以由一个工具更可靠或高效地完成，而不是由GPT完成，那么将其外包可以获得两者的优势。

方法：

+ [使用基于嵌入的搜索来实现高效的知识检索](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-use-embeddings-based-search-to-implement-efficient-knowledge-retrieval)
+ [使用代码执行来进行更准确的计算或调用外部API](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-use-code-execution-to-perform-more-accurate-calculations-or-call-external-apis)
+ [给模型提供访问特定功能的权限](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-give-the-model-access-to-specific-functions)

### 6. 系统地测试回答变更

如果你可以测量性能，那么提高性能就会更容易。在某些情况下，对提示的修改可能会在几个孤立的示例上提高性能，但在更具代表性的示例集上可能会导致整体性能下降。因此，为了确定一项改变对性能是净正面的，可能需要定义一个全面的测试套件（也称为"eval"）。

方法：

+ [将模型输出与金标准答案进行比较评估](https://platform.openai.com/docs/guides/gpt-best-practices/tactic-evaluate-model-outputs-with-reference-to-gold-standard-answers)