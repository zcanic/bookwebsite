# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第96部分

**原始页码**: 286 - 288
**段落数量**: 11
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 285-285 (2695 字符)
- **后文上下文页码**: 289-289 (2129 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Prompt engineering' 译为 '提示工程'。 
2. 'Embeddings' 译为 '嵌入'。 
3. 'Fine-tuning' 译为 '微调'。 
4. 'Few-shot learning' 译为 '少样本学习'。 
5. 原文中的 'basic promoting' 经上下文判断为 'basic prompting' 的拼写错误，已统一译为 '基础提示'。 
6. 'Design time' 和 'Runtime' 分别译为 '设计阶段' 和 '运行阶段'，以符合产品经理和 ERP 领域的习惯表达。 
7. 最后一段末尾依据上下文逻辑保留了开放性结尾，以衔接后文关于'复杂上下文（如PDF文档）'的讨论。

---

1. Prompt engineering: This technique involves crafting specific tasks or questions in natural language, which can help guide the foundation model to generate more accurate and relevant responses. By carefully designing prompts, we can effectively instruct the model to focus on the desired aspects of the task, improving its overall performance.

**【译文】** 1. 提示工程 (Prompt engineering)：这项技术涉及用自然语言设计具体的任务或问题，以引导基础模型生成更准确、更相关的回答。通过精心设计提示词，我们可以有效地指示模型关注任务的特定方面，从而提升其整体性能。

---

2. Embeddings: Incorporating external knowledge through embeddings can significantly improve a foundation model’s ability to adapt to domain-specific knowledge. Embeddings represent information in a numerical format that the model can easily process and learn from. By including domain-specific embeddings (e.g., example for good code, product documentation) or pre-trained embeddings from various sources, we can enrich the model’s understanding of the domain and provide it with useful references to generate more accurate and context-aware outputs.

**【译文】** 2. 嵌入 (Embeddings)：通过嵌入引入外部知识，可以显著提高基础模型适应特定领域知识的能力。嵌入将信息表示为数值格式，使模型能够轻松处理和学习。通过包含特定领域的嵌入（例如优秀代码示例、产品文档）或来自各种来源的预训练嵌入，我们可以丰富模型对领域的理解，并为其提供有用的参考，以生成更准确且具备上下文感知的输出。

---

3. Fine-tuning: Another way to adapt foundation models is by fine-tuning their parameters on a small set of labeled data specific to the target task. This process involves updating the model’s weights using gradient descent and backpropagation, enabling it to learn the nuances of the task and improve its performance. Fine-tuning can be particularly effective when dealing with few-shot learning scenarios, where we have limited labeled data available.

**【译文】** 3. 微调 (Fine-tuning)：适应基础模型的另一种方法是使用针对目标任务的一小部分标记数据来微调其参数。这一过程涉及使用梯度下降和反向传播来更新模型的权重，使其能够学习任务的细微差别并提高性能。在标记数据有限的少样本学习 (Few-shot learning) 场景中，微调尤其有效。

---

1. Digital assistant: For question-answer use cases, the digital assistant solutions (chat bots) should be used. Generative AI capabilities are currently incorporated into the underlying digital assistant technologies. Applications can follow the established programming model for digital assistant and make indirectly use of Generative AI.

**【译文】** 1. 数字助手：对于问答用例，应使用数字助手解决方案（聊天机器人）。生成式 AI 能力目前已整合到底层数字助手技术中。应用程序可以遵循数字助手既定的编程模型，间接使用生成式 AI。

---

2. Basic prompting: Business applications with elementary requirements regarding prompt engineering should utilize the prompt creation capabilities of the ERP platform. Predefined prompt templates where just parameters are replaced by concrete values are an example for this category. These basic prompts are executed on Generative AI models, which are hosted externally or deployed on AI technology platform.

**【译文】** 2. 基础提示：对提示工程有基本要求的业务应用程序应利用 ERP 平台的提示创建能力。预定义的提示模板（其中仅参数被具体值替换）就是此类的一个示例。这些基础提示在托管于外部或部署在 AI 技术平台上的生成式 AI 模型上执行。

---

3. Advanced prompting: Business applications with sophisticated requirements concerning prompt engineering should facilitate the prompt creation capabilities of the AI technology platform. Prompts including embeddings and require therefore vector search engines are an example for this category. Prompt execution is also here based on Generative AI models, which are hosted externally or deployed on the AI technology platform.

**【译文】** 3. 高级提示：对提示工程有复杂要求的业务应用程序应利用 AI 技术平台的提示创建能力。包含嵌入并因此需要向量搜索引擎的提示就是此类的一个示例。这里的提示执行同样基于托管于外部或部署在 AI 技术平台上的生成式 AI 模型。

---

Fig. 19.1 Architecture for embedding Generative AI

**【译文】** 图 19.1 嵌入生成式 AI 的架构

---

4. Model retraining: For applications where the pretrained Generative AI models are not sufficient but fine-tuning is required, the deployment and retraining capabilities of AI technology platform for Generative AI models should be used. The idea is to train the highest layers of the underlying foundation models with application specific data. The previous three realization patterns can be then applied on these local Generative AI models.

**【译文】** 4. 模型重训练：对于预训练的生成式 AI 模型不足以满足需求而必须进行微调的应用程序，应使用 AI 技术平台针对生成式 AI 模型的部署和重训练能力。其思路是使用应用程序特定的数据来训练底层基础模型的最高层。前述的三种实现模式随后可以应用于这些本地生成式 AI 模型。

---

The prompt generator utilizes the creation of prompt templates for a specific use case during design time and filling the parameters with concrete values during runtime. Let’s explain this with the following example:

**【译文】** 提示生成器利用在设计阶段为特定用例创建提示模板，并在运行阶段用具体值填充参数。让我们通过以下示例来解释这一点：

---

Prompt template for the use case Internal Job Description
–– You are an assistant designed to generate appealing job descriptions for an international company named [company_name].
–– Users will input structured data for a job position. You should generate an html-formatted job description.
–– Avoid bias based on physical appearance, ethnicity, or race. Replace inappropriate language with inclusive language or politely refuse results, if that is not possible.
–– Provide the response in [language].
–– Generate an internal job description for [job title]. The candidate shall have [Skill-01], [Skill-02] and [Skill-03].
–– Hiring Manager is [manager] and recruiter is [recruiter].
–– Location is [location] and start of work is [start-date].

**【译文】** 内部职位描述用例的提示模板
—— 你是一个助手，旨在为一家名为 [company_name] 的国际公司生成具有吸引力的职位描述。
—— 用户将输入职位岗位的结构化数据。你应该生成一份 html 格式的职位描述。
—— 避免基于外貌、种族或民族的偏见。将不恰当的语言替换为包容性语言，如果无法做到，则礼貌地拒绝输出结果。
—— 请用 [language] 提供回复。
—— 为 [job title] 生成一份内部职位描述。候选人应具备 [Skill-01]、[Skill-02] 和 [Skill-03]。
—— 招聘经理是 [manager]，招聘专员是 [recruiter]。
—— 地点是 [location]，工作开始时间是 [start-date]。

---

The above prompt template contains parameters illustrated as square brackets. During design time, such templates are defined and stored, and the corresponding Generative AI application provides the values for the parameters during runtime when the according Generative AI functionality is consumed. The prompt generator just applies text functionality and replaces the parameters with the concrete values. Storing the prompt templates on the ERP platform for basic promoting dramatically simplifies corresponding life cycle management (e.g., version dependency of templates and the ERP system). Depending on the requirements of the use case, additional context must be appended to the prompt. This can be just examples (e.g., for good job descriptions), which are handled by the component domain context in case of basic promoting. More complex context could be needed for advanced prompting

**【译文】** 上述提示模板包含以方括号表示的参数。在设计阶段，定义并存储此类模板；在运行阶段，当通过相应的生成式 AI 应用程序使用该功能时，会为这些参数提供具体的值。提示生成器仅应用文本处理功能，用具体值替换参数。将用于基础提示的提示模板存储在 ERP 平台上，极大地简化了相应的生命周期管理（例如，模板与 ERP 系统的版本依赖关系）。根据用例的需求，必须在提示中附加额外的上下文。这可能只是示例（例如，优秀的职位描述），在基础提示的情况下由组件领域上下文处理。对于高级提示，可能需要更复杂的上下文

---

