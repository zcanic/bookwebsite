# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第73部分

**原始页码**: 217 - 219
**段落数量**: 12
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 216-216 (2814 字符)
- **后文上下文页码**: 220-220 (3476 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Model Degradation' 统一翻译为 '模型退化'。2. 'Retraining' 翻译为 '重训练'。3. 最后一句话原文截断 ('whether it’s a decision tree or a')，参考后文 Page 220 的上下文补充了 '[深度学习模型]' 以确保语义完整。

---

12.3 Conclusion
Extensibility plays an important role in the context of business applications. The software is supposed to be dynamically adjustable to the present businesses needs and the future ones too. Another benefit of extensibility is that software can be even more function rich, because add-ons could target a very specific or unique problem without bloating the core software.

**【译文】** 12.3 结论
在商业应用环境中，扩展性扮演着重要角色。软件应当能够根据当前及未来的业务需求进行动态调整。扩展性的另一个好处是，软件功能可以变得更加丰富，因为附加组件（add-ons）可以针对特定或独特的问题，而不会导致核心软件变得臃肿。

---

It is important to distinguish at least two roles within the extensibility process: the line-of-business (LOB) expert and the developer (or sufficiently skilled IT expert). Extension projects are triggered and driven by business experts. Therefore, it is essential to incorporate them by providing suitable, non-technical extensibility tools. Still, certain tasks require the involvement of the IT expert/developer.

**【译文】** 在扩展流程中，区分至少两个角色至关重要：业务线（LOB）专家和开发人员（或具备足够技能的IT专家）。扩展项目通常由业务专家发起和驱动。因此，通过提供合适的非技术性扩展工具将他们纳入流程是必不可少的。尽管如此，某些任务仍需要IT专家或开发人员的参与。

---

Key requirements concerning extensibility are:
• Ensure stability after upgrades: Customers and partners extension must continue to work after patches and upgrades, without any manual or automated after-import activities.
• Enable multilayer extensibility: Multilayer extensions shall be supported in terms of allowing customer extensions on top of industry extensions.
• Avoid changing ERP delivered artifacts: Modification of ERP standard objects can be overwritten after updates and upgrades. Modifications of the ERP functionality discontinuous the customers from new innovations provided with updates and upgrades.

**【译文】** 关于扩展性的关键需求包括：
• 确保升级后的稳定性：客户和合作伙伴的扩展必须在打补丁和升级后继续正常工作，无需任何手动或自动的导入后操作。
• 启用多层扩展性：应支持多层扩展，允许在行业扩展层之上进行客户层扩展。
• 避免更改ERP交付的工件：修改ERP标准对象可能会在更新和升级后被覆盖。修改ERP功能会切断客户与更新升级所提供的新创新的联系。

---

ERP software includes predefined artificial intelligence scenarios. However, customers or partners might require adopting this artificial intelligence content to their specific needs based on extensibility. This might be also necessary for use cases that customers and partners develop by themselves. Therefore, in this section, we identified the business requirements and the proposed necessary technical implementation for extensibility in the context of artificial intelligence.

**【译文】** ERP软件包含了预定义的AI场景。然而，客户或合作伙伴可能需要基于扩展性将这些AI内容调整为适应其特定需求。对于客户和合作伙伴自行开发的用例，这也可能是必要的。因此，本节中，我们明确了在人工智能背景下实现扩展性的业务需求及建议的技术实施方案。

---

13 Model Degradation
In this chapter, we specify the business requirements and propose the solution concept for model degradation. Over the course of time, the prediction power of artificial intelligence models decreases due to changes in the data environment. Determining this time point and triggering retraining is the objective of model degradation. However, this is a challenging task as in addition to statistical techniques, feedback of the users is required and also the ability to parallelly run models in ERP systems. Our focus is less on the data science methods for model degradation but on the integration aspects regarding ERP software.

**【译文】** 第13章 模型退化
在本章中，我们将详述模型退化的业务需求并提出解决方案概念。随着时间的推移，由于数据环境的变化，人工智能模型的预测能力会下降。确定这一时间点并触发重训练（retraining）是模型退化管理的目标。这是一项具有挑战性的任务，因为除了统计技术外，还需要用户的反馈，以及在ERP系统中并行运行模型的能力。我们的重点不在于处理模型退化的数据科学方法，而在于与ERP软件相关的集成方面。

---

13.1 Problem Statement
The act of retraining is a distinguishing feature that separates artificial intelligence systems from traditional ones. This ongoing process imposes specific requirements on the user experience and, based on the feedback loop’s structure, necessitates the inclusion of new roles like data scientists and specialized user interfaces for tracking and data examination.

**【译文】** 13.1 问题陈述
重训练是区分人工智能系统与传统系统的一个显著特征。这一持续的过程对用户体验提出了特定要求，并且基于反馈循环的结构，需要引入数据科学家等新角色，以及用于跟踪和数据检查的专用用户界面。

---

Notably, as the surrounding environment changes over time, the predictive accuracy of artificial intelligence models tends to diminish, necessitating periodic retraining or even complete remodeling. This phenomenon is referred to as model degradation. Model degradation is the gradual decline in a model’s performance over time. This decline can be attributed to several factors, including data drift, overfitting, and suboptimal hyperparameter tuning.

**【译文】** 值得注意的是，随着周围环境随时间变化，人工智能模型的预测准确性往往会降低，这就需要定期重训练甚至彻底重构模型。这种现象被称为模型退化。模型退化是指模型性能随时间推移逐渐下降的过程。这种下降可归因于多种因素，包括数据漂移、过拟合和次优的超参数调优。

---

Data drift is a situation where the data distribution changes over time, which in turn reduces the model’s accuracy. Overfitting happens when the model is overly complex and learns the training data too well, which reduces its accuracy when applied to new data. Suboptimal hyperparameter tuning happens when the model is not fully optimized, leading to a drop in performance. The crucial issue that needs to be addressed is: What are the ways to identify and rectify model degradation?

**【译文】** 数据漂移（Data drift）是指数据分布随时间发生变化，从而降低模型准确性的情况。过拟合（Overfitting）发生于模型过于复杂且对训练数据学习得“太好”时，这会降低其应用于新数据时的准确性。次优的超参数调优发生于模型未完全优化时，导致性能下降。需要解决的关键问题是：有哪些方法可以识别和纠正模型退化？

---

13.2 Solution Proposal
In order to effectively address the issue of model degradation, it’s crucial to consistently monitor the precision of the artificial intelligence model. It’s necessary to include feedback mechanisms, and the artificial intelligence models should be validated using data sets that mirror environmental changes. If there’s a decline in the model’s performance, specifically in its predictive accuracy, then it becomes necessary to initiate retraining or even a complete overhaul of the model.

**【译文】** 13.2 解决方案建议
为了有效解决模型退化问题，持续监控人工智能模型的精度至关重要。必须包含反馈机制，且应使用反映环境变化的数据集来验证人工智能模型。如果模型性能下降， particularly in its predictive accuracy（特别是预测准确性），则必须启动重训练甚至对模型进行全面彻底的检查。

---

The following sections will outline chosen strategies to identify model degradation. Notably, there are a variety of statistical techniques that can be used to mathematically tackle model degradation. However, this viewpoint from data science is assumed as a given and is not the focus of this discussion. Our deliberations are centered on the integration aspects of model degradation that are related to ERP.

**【译文】** 接下来的部分将概述识别模型退化的选定策略。值得注意的是，有多种统计技术可用于从数学上解决模型退化问题。然而，这种数据科学视角被视为既定前提，并非本次讨论的重点。我们的探讨主要集中在与ERP相关的模型退化集成方面。

---

13.2.1 Accuracy KPIs
Determining the precision of an artificial intelligence model is crucial in assessing the model’s deterioration. An artificial intelligence model is essentially a function that correlates a specific set of values for the input variables to the appropriate corresponding values for the output variable. The process of identifying such a function for a specific dataset is referred to as model training.

**【译文】** 13.2.1 准确性关键绩效指标（Accuracy KPIs）
确定人工智能模型的精度对于评估模型退化（deterioration）至关重要。人工智能模型本质上是一个函数，它将输入变量的一组特定值与输出变量的相应值关联起来。针对特定数据集识别该函数的过程称为模型训练。

---

Effective models not only minimize errors for known input values but also generate predictions for scenarios that are only somewhat analogous to the situations already recorded in the existing data table. For all artificial intelligence techniques, it’s critical to understand the performance of the artificial intelligence model, whether it’s a decision tree or a

**【译文】** 有效的模型不仅能最大限度地减少已知输入值的误差，还能针对与现有数据表中已记录情况仅具有一定相似性的场景生成预测。对于所有人工智能技术，无论是决策树还是[深度学习模型]，了解人工智能模型的性能都至关重要。

---

