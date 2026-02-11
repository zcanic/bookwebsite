# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第88部分

**原始页码**: 262 - 264
**段落数量**: 17
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 261-261 (3308 字符)
- **后文上下文页码**: 265-265 (304 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Switch framework 译为'开关框架'，是SAP ERP中的标准术语，用于管理行业解决方案的激活。 2. Repository objects 译为'资源库对象'，指ERP系统中的代码、表定义等开发对象。 3. Design-time artifacts 译为'设计时工件'，指在开发阶段定义的静态对象，区别于运行时（runtime）对象。 4. Live environment 译为'生产环境'，意指实际业务运行的真实环境。

---

design applies, and all dependencies between business features are managed at the business configuration content level.

**【译文】** 增量内容设计原则同样适用，并且业务特性之间的所有依赖关系都在业务配置内容层面进行管理。

---

However, the focus of business features is on checking whether a customer has specific customizing settings in place for the given functionality. Therefore, this ERP technology doesn’t help with the validation of artificial intelligence models, as it’s about proving the quality, not about checking for customizing settings.

**【译文】** 然而，业务特性的重点在于检查客户是否针对特定功能进行了相应的定制设置。因此，这项ERP技术对人工智能模型的验证没有帮助，因为模型验证的目的是证明质量，而不是检查定制设置。

---

Switch framework

**【译文】** 开关框架（Switch Framework）

---

A switch framework is a tool that streamlines the landscape of an ERP system by incorporating one or more industry-specific solutions into a standard system. This framework provides the ability to manage the visibility of repository objects or their components from an external source using switches. When a switch framework is utilized, all industry-specific solutions and a limited set of repository objects are delivered in a deactivated state within the system. Typically, there is no need to install an industry-specific solution, but it must be activated when necessary.

**【译文】** 开关框架是一种通过将一个或多个行业特定解决方案整合到标准系统中，从而简化ERP系统架构的工具。该框架能够利用开关从外部源管理资源库对象或其组件的可见性。当使用开关框架时，所有的行业特定解决方案和有限的一组资源库对象在系统中交付时都处于停用状态。通常情况下，无需安装行业特定解决方案，但在必要时必须将其激活。

---

The switch framework is usually incorporated into the development environment and works in close collaboration with enhancement tools. The primary objective of these enhancement tools is to offer a technology that enables the creation of enhancements without modifications and to consolidate all potential methods of modifying or enhancing repository objects. The core of the switch framework is a straightforward structure that includes an enhancement option and an implementation element that can be attached to it. The switch framework governs which enhancement implementations should be executed.

**【译文】** 开关框架通常整合在开发环境中，并与增强工具紧密协作。这些增强工具的主要目标是提供一种无需修改核心代码即可创建增强功能的技术，并整合所有可能修改或增强资源库对象的方法。开关框架的核心是一个简单的结构，包含一个增强选项（enhancement option）以及可附加其上的实现元素。开关框架控制着哪些增强实现应当被执行。

---

The switch framework primarily concentrates on industry verticalization and design-time artifacts. Therefore, this technology does not meet the requirements for validating models of artificial intelligence, as these models are not merely design-time entities.

**【译文】** 开关框架主要关注行业垂直化和设计时工件（design-time artifacts）。因此，这项技术无法满足验证人工智能模型的需求，因为这些模型不仅仅是设计时实体。

---

Given that none of these technologies can be repurposed to verify the models of artificial intelligence from the perspective of business processes, we will move on to discuss a novel strategy. The process of validating artificial intelligence systems can be broadly divided into two categories: offline and online. The offline validation process takes place during the initial development phase, where data scientists experiment with various features, models, and hyperparameters. This involves a repetitive cycle of validating against a predetermined baseline using selected evaluation metrics.

**【译文】** 鉴于上述技术都无法从业务流程的角度被重新用于验证人工智能模型，我们将接着讨论一种全新的策略。验证人工智能系统的过程大致可分为两类：离线验证和在线验证。离线验证过程发生在初始开发阶段，此时数据科学家会对各种特征、模型和超参数进行实验。这涉及一个重复的循环过程，即使用选定的评估指标，对照预定的基准进行验证。

---

Once a model that shows satisfactory performance is developed, the next phase is to launch the model into a live environment and validate its performance using real-time data. This is known as online validation, which involves methods that are implemented post-offline validation to continuously validate and enhance the performance of models as new data comes in.

**【译文】** 一旦开发出表现令人满意的模型，下一阶段就是将该模型发布到生产环境，并使用实时数据验证其性能。这被称为在线验证，它涉及在离线验证之后实施的方法，目的是随着新数据的进入，持续验证并增强模型的性能。

---

Fig. 17.1 State transition of artificial intelligence models

**【译文】** 图 17.1 人工智能模型的状态流转

---

In training

**【译文】** 训练中（In training）

---

During the training phase, the initiation of the artificial intelligence model’s training is overseen by the business administrator using the already discussed Intelligent Scenario Lifecycle Management application. The duration of the training can vary greatly, from mere minutes to several days, depending on the artificial intelligence algorithm used and the nature of the application data. There are also instances where the training process may fail, such as when a particular configuration is absent or there is insufficient training data.

**【译文】** 在训练阶段，人工智能模型训练的启动由业务管理员使用前文讨论过的智能场景生命周期管理（Intelligent Scenario Lifecycle Management）应用来监督。训练的持续时间差异很大，从几分钟到几天不等，具体取决于所使用的人工智能算法和应用数据的性质。在某些情况下，训练过程可能会失败，例如缺少特定配置或训练数据不足时。

---

Trained

**【译文】** 已训练（Trained）

---

Once the model is trained, statistical key performance indicators (KPIs) are computed to determine its predictive power. The fundamental concept here is to train an artificial intelligence system using a specific dataset and then apply the derived function to data points where the target variable’s value is already known. If the model’s KPIs fail to meet the set expectations, the model is deemed ineffective and is labeled as failed.

**【译文】** 一旦模型训练完成，系统会计算统计关键绩效指标（KPIs）以确定其预测能力。这里的基本概念是使用特定数据集训练人工智能系统，然后将得出的函数应用于目标变量值已知的数据点。如果模型的KPI未能达到设定预期，该模型将被视为无效并被标记为失败。

---

In business validation

**【译文】** 业务验证中（In business validation）

---

However, KPIs only provide a static measure of the model’s predictive power and are not adequate for the productive application of the artificial intelligence model. As a result, a business validation process is necessary. This process evaluates the artificial intelligence model in the context of the relevant business processes and the associated business users. If the business validation process is unsuccessful, the artificial intelligence model is labeled as failed. Typically, failed artificial intelligence models are removed from the system.

**【译文】** 然而，KPI仅提供了模型预测能力的静态度量，对于人工智能模型的生产应用来说并不充分。因此，必须进行业务验证流程。该流程在相关业务流程和相关业务用户的背景下评估人工智能模型。如果业务验证流程不成功，该人工智能模型将被标记为失败。通常，失败的人工智能模型会从系统中移除。

---

Business validated

**【译文】** 业务已验证（Business validated）

---

If the business validation process is successful, the artificial intelligence model is designated as active for productive use. From this point forward, this model handles all inference requests. Before a new model can be activated, the existing model must be deactivated, as only one model can be active in the system at a time. Deactivated models cannot be deleted due to legal compliance requirements. These models can either be stored in the online database or archived to external systems to save memory/storage space.

**【译文】** 如果业务验证流程成功，该人工智能模型将被指定为激活状态以供生产使用。从此刻起，该模型将负责处理所有的推理请求。在激活新模型之前，必须先停用现有模型，因为系统中同一时间只能有一个模型处于活动状态。由于法律合规性要求，已停用的模型不能被删除。这些模型可以存储在在线数据库中，或者归档到外部系统以节省内存/存储空间。

---

