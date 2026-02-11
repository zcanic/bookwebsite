# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第75部分

**原始页码**: 223 - 225
**段落数量**: 5
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 222-222 (3177 字符)
- **后文上下文页码**: 226-226 (2450 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Encrypted database models'：原文虽用encrypted（加密），但在ERP语义层上下文中，通常指代技术性强、命名晦涩（cryptic）的底层物理表（如SAP的KNA1等），相对于语义视图难以理解。故翻译为'晦涩的底层数据库模型'以符合上下文逻辑。2. 'Artifact'翻译为'工件'，是软件工程和项目管理中的标准术语。

---

format of feedback collection determine the quality of the feedback. We distinguish between structured user input and unstructured user input. Structured user input allows us to gather very specific feedback by asking a closed question with a set of given options. The user can only respond in the predefined format and cannot freely provide feedback. Structured feedback typically involves focused questions that can be answered with a simple yes or no, and the feedback usually pertains to the quality of recommendations.

**【译文】** 反馈收集的方法和格式决定了反馈的质量。我们区分了**结构化用户输入**和**非结构化用户输入**。结构化用户输入允许我们通过询问带有既定选项集的封闭式问题来收集非常具体的反馈。用户只能按预定义格式回答，无法自由提供反馈。结构化反馈通常涉及可以用简单的“是”或“否”回答的针对性问题，且反馈通常与推荐的质量有关。

---

Unstructured user input, on the other hand, allows us to collect unrestricted feedback by asking open-ended questions. This enables the user to provide complex responses and offer feedback on aspects we may not have considered. This method allows for the collection of insights on external real-world factors that are not part of the ERP system. Unstructured feedback typically involves open-ended questions that invite unlimited responses. The feedback is collected to gain information on the quality and performance of intelligence services. Additional characteristics include collecting feedback to understand user behavior on the user interface while performing a task and that processing feedback requires time and detailed investigation for accurate interpretation.

**【译文】** 另一方面，非结构化用户输入允许我们通过询问开放式问题来收集不受限制的反馈。这使得用户能够提供复杂的回复，并针对我们可能未曾考虑过的方面提供反馈。该方法允许收集关于ERP系统之外的外部现实世界因素的见解。非结构化反馈通常涉及引发无限制回复的开放式问题。收集此类反馈是为了获取关于智能服务质量和性能的信息。其主要特征还包括：收集反馈以了解用户在执行任务时的界面操作行为，以及处理此类反馈需要时间和详细调查才能进行准确解读。

---

13.2.4 Solution Architecture

**【译文】** 13.2.4 解决方案架构

---

The artifact of an artificial intelligence scenario represents an application of artificial intelligence. The idea of artificial intelligence scenarios ensures a consistent management throughout the life cycle and facilitates monitoring at the level of business processes. Above the application tables, we define views of the core data model, which embody the semantic data model of the ERP system. These core data model views conceal the encrypted database models and encapsulate them into entities that are understandable to humans.

**【译文】** 人工智能场景的**工件**（Artifact）代表了人工智能的一种应用。人工智能场景的概念确保了整个生命周期的一致性管理，并促进了业务流程层面的监控。在应用表之上，我们定义了**核心数据模型视图**，这些视图体现了ERP系统的语义数据模型。这些核心数据模型视图屏蔽了晦涩的底层数据库模型，并将其封装为人类可理解的实体。

---

In addition to the SQL view definition, these core data model views include domain-specific metadata, referred to as annotations. For applications of artificial intelligence, a specific view of the core data model is provided for model training. During the training process, artificial intelligence algorithms access the application data. The artificial intelligence model, once trained, is stored in the database system.

**【译文】** 除了SQL视图定义外，这些核心数据模型视图还包含特定领域的元数据，称为**注解**（Annotations）。对于人工智能应用，我们提供了一个专门用于模型训练的核心数据模型视图。在训练过程中，人工智能算法会访问这些应用数据。人工智能模型一旦训练完成，将被存储在数据库系统中。

---

