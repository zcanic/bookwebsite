# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第76部分

**原始页码**: 226 - 228
**段落数量**: 22
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 225-225 (46 字符)
- **后文上下文页码**: 229-229 (1110 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Model Degradation (模型衰退): 指模型性能随时间推移因数据分布变化而下降的现象。
2. KPI (关键绩效指标): 保持通用缩写。
3. Remodeling (模型重构): 此处指重新设计或构建模型结构，区别于单纯的Retraining（重新训练参数）。
4. Neuronal networks: 原文拼写较为少见，标准术语为Neural Networks，译为'神经网络'。
5. Explainability (可解释性): AI领域核心概念，指AI决策过程能被人类理解的程度。

---

These core data model views are typically time-dependent, containing fields for selecting data records for a specific time frame. To evaluate the performance of the artificial intelligence model, the degradation component utilizes the view for model training to access new data that has become available since the last training session. Since implicit feedback is incorporated into the application data, this control dataset includes the actual values for the target variables and the value of the input parameters. The current version of the trained model is used to compute the predictions based on the input values. This is the responsibility of the metrics component, which also compares the actual and predicted values to compute static key performance indicators (KPIs). The degradation component interprets these KPIs and suggests corresponding actions (for instance, retraining or remodeling), which are presented in the monitoring view.

**【译文】** 这些核心数据模型视图通常是时间相关的，包含用于筛选特定时间范围内数据记录的字段。为了评估人工智能模型的性能，模型衰退组件利用模型训练视图来获取自上次训练会话以来产生的新数据。由于隐式反馈已被整合到应用数据中，这个对照数据集包含了目标变量的实际值以及输入参数的值。系统使用当前版本的已训练模型，根据输入值计算预测结果。这是指标组件的职责，该组件还负责比较实际值和预测值，以计算静态关键绩效指标（KPI）。模型衰退组件会解读这些KPI，并建议相应的行动（例如重新训练或模型重构），这些建议会呈现在监控视图中。

---

13.3 Conclusion

**【译文】** 13.3 结论

---

In the course of time, the prediction power of artificial intelligence models decreases due to changes in the data environment. Determining this time point and triggering retraining is the objective of model degradation. It is essential to anticipate how data will evolve over time in all artificial intelligence projects. In fact, before we use a model, its accuracy is at its highest. Model degradation is a phenomenon that has been extensively researched in academics for the past 20 years, although industry best practices still frequently overlook it. Thus, it is important to regularly assess model performance on new data sets. To know when to take action, these performance traces should be periodically compared and shown. There are many KPIs available to evaluate model performance. Without a strategy for routinely evaluating performance measurements and initiating model retraining or rebuilding, we are able to detect performance loss but lack a system for addressing it. Explicit and implicit feedback must be also taken into account, which are, in the context of ERP systems, complex to resolve. In this section, we deducted the business requirements and the necessary technical implementation for model degradation regarding ERP software. We proposed, for example, feedback loops as an important technique for resolving model degradation. Implicit, explicit, and delayed feedback loops were depicted.

**【译文】** 随着时间的推移，由于数据环境的变化，人工智能模型的预测能力会逐渐下降。确定这一时间点并触发重新训练是模型衰退管理的目标。在所有人工智能项目中，预判数据将如何随时间演变至关重要。事实上，模型在投入使用之前，其准确性往往处于最高水平。模型衰退现象在学术界已被广泛研究了20年，尽管行业最佳实践仍经常忽视它。因此，定期评估模型在新数据集上的性能非常重要。为了知道何时采取行动，应定期比较并展示这些性能轨迹。有许多KPI可用于评估模型性能。如果没有制定常规评估性能指标并启动模型重新训练或重建的策略，我们虽然能检测到性能损失，却缺乏解决该问题的体系。还必须考虑显式和隐式反馈，而在ERP系统的背景下，这些反馈的处理通常很复杂。在本节中，我们推导出了针对ERP软件模型衰退的业务需求和必要的技术实现。例如，我们提出反馈循环是解决模型衰退的重要技术，并描述了隐式、显式和延迟反馈循环。

---

14 Explanation of Results

**【译文】** 第14章 结果解释

---

In this chapter, we specify the business requirements and propose the solution concept for explainability. To build trust between human and machine, it’s important to explain the results provided by artificial intelligence models. Transparency and traceability of artificial intelligence models are also needed for statutory reasons. However, depending on the underlying artificial intelligence techniques, this can be very challenging, for example, neuronal networks are hard to explain. In the context of ERP systems, additionally, the explanation must be transferred into a business language. Thus, user interface designers must investigate long time, for each use case translates the statistical numbers into the end user’s business domain.

**【译文】** 在本章中，我们将明确业务需求并提出关于可解释性的解决方案概念。为了在人与机器之间建立信任，解释人工智能模型提供的结果至关重要。出于法规监管的原因，人工智能模型的透明度和可追溯性也是必需的。然而，根据底层人工智能技术的不同，这可能极具挑战性，例如神经网络就很难解释。此外，在ERP系统的背景下，这种解释必须转化为业务语言。因此，用户界面设计师必须投入大量时间进行研究，针对每个用例将统计数据转化为最终用户熟悉的业务领域语言。

---

14.1 Problem Statement

**【译文】** 14.1 问题陈述

---

When an algorithm’s underlying model is adequately explained, and the rationale behind its results is made clear, a foundation of trust is established between humans and machines. Assessing trust is a crucial factor for humans to act based on a prediction. This element becomes even more significant in the context of ERP business applications, where users are legally responsible for every decision they make. The concept of explainable artificial intelligence implies that the logic behind the suggestions of an intelligent system can be elucidated in a timely and contextual manner. This approach facilitates the building of trust and allows for the anticipation of legal requirements related to automated decision-making. The need for explanations from artificial intelligence should be considered under one or more of the following circumstances:

**【译文】** 当算法的底层模型得到充分解释，且其结果背后的逻辑被阐明时，人类与机器之间就建立了信任基础。信任度评估是人类基于预测采取行动的关键因素。这一要素在ERP业务应用的背景下变得尤为重要，因为用户对其做出的每一项决策都负有法律责任。可解释人工智能（XAI）的概念意味着，智能系统建议背后的逻辑可以被及时且结合上下文地阐明。这种方法有助于建立信任，并能提前满足与自动化决策相关的法律要求。在以下一种或多种情况下，应考虑对人工智能结果进行解释的需求：

---

• Criticality

**【译文】** • 关键性

---

When there is a substantial risk linked to making an incorrect decision and the actions taken are difficult to undo, an explanation for the system’s suggestion shall be necessary. Conversely, if the risk is minimal and actions can be easily reversed, users may not require an explanation.

**【译文】** 当做出错误决策存在重大风险且采取的行动难以撤销时，必须对系统的建议进行解释。相反，如果风险极小且行动可以轻松逆转，用户可能不需要解释。

---

• Complexity

**【译文】** • 复杂性

---

When users find it challenging to immediately evaluate the impact and quality of their decisions, they may need additional input. On the other hand, if users can readily determine whether a suggestion is suitable without any training, they may not need further information.

**【译文】** 当用户觉得难以立即评估其决策的影响和质量时，他们可能需要额外的输入信息。另一方面，如果用户无需任何培训就能轻易判断建议是否合适，他们可能不需要进一步的信息。

---

• Transparency

**【译文】** • 透明度

---

When a business process is subject to rigorous auditing requirements, auditors must be able to trace transactions back and understand the reasoning behind each step of execution. However, if there are no auditing requirements, explanations may not be necessary, assuming they are also not required by end users.

**【译文】** 当业务流程受到严格的审计要求约束时，审计员必须能够追溯交易并理解执行每一步骤背后的推理。然而，如果没有审计要求，且最终用户也不需要，那么解释可能就不是必须的。

---

• Volatility

**【译文】** • 波动性

---

When the artificial intelligence application needs to adjust to shifting conditions or requirements, it relies on continuous feedback. Conversely, if the feedback has little or no impact on the algorithm’s output or the user experience, providing an additional explanation may be more of a distraction than a help.

**【译文】** 当人工智能应用需要适应不断变化的条件或需求时，它依赖于持续的反馈。相反，如果反馈对算法的输出或用户体验影响甚微或没有影响，提供额外的解释可能与其说是帮助，不如说是一种干扰。

---

14.2 Solution Proposal

**【译文】** 14.2 解决方案建议

---

When considering ERP software, we are faced with two primary inquiries related to explainable artificial intelligence:
• What design principles should we use to incorporate explainable artificial intelligence into the user interfaces?
• What elements need to be incorporated into the ERP backend to facilitate explainable artificial intelligence?

**【译文】** 在考虑ERP软件时，我们面临两个与可解释人工智能相关的主要问题：
• 我们应该使用什么设计原则将可解释人工智能融入用户界面？
• 需要在ERP后端集成哪些要素以促进可解释人工智能？

---

This chapter will not delve into the techniques used to generate explanations for specific artificial intelligence algorithms. These methods are well-known in the data science community and taken as granted. Therefore, this discussion will focus solely on aspects specific to ERP, as guided by the aforementioned questions.

**【译文】** 本章不会深入探讨用于为特定人工智能算法生成解释的技术。这些方法在数据科学界众所周知并被视为通用标准。因此，根据上述问题，本次讨论将仅关注ERP特有的方面。

---

14.2.1 User Interface

**【译文】** 14.2.1 用户界面

---

The level of information that individuals require to comprehend a system proposal can fluctuate. This variation is influenced by the specific technique of artificial intelligence being used, the context in which it is used, the task the user is performing, and the role of the user. We can distinguish between three levels of explanation:

**【译文】** 个人理解系统建议所需的信息详细程度可能会有所波动。这种差异受所使用的特定人工智能技术、使用背景、用户执行的任务以及用户角色的影响。我们可以区分三个解释层级：

---

1. Indicator (What?)

**【译文】** 1. 指示器（是什么？）

---

This represents the most basic level of explanation. An indicator becomes necessary whenever there is an output from the artificial intelligence system. This indicator also serves as the entry point to the subsequent level of explanation.

**【译文】** 这是最基础的解释层级。只要人工智能系统有输出，指示器就是必要的。该指示器也作为通往下一级解释的入口点。

---

