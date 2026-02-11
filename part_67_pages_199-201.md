# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第67部分

**原始页码**: 199 - 201
**段落数量**: 5
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 198-198 (2557 字符)
- **后文上下文页码**: 202-202 (1548 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Intelligent Scenario (智能场景): 在ERP上下文中，通常指定义了特定业务问题、数据源、算法和输出格式的标准化AI用例单元。
2. Inference API Signature (推理 API 签名): 指API的输入参数、输出结构和方法的定义。
3. Consuming applications (消费端应用): 指调用AI服务以获取预测或分析结果的上层业务应用。

---

primary problem being addressed using artificial intelligence. To achieve this, data scientists determine the necessary algorithm and data features.

**【译文】** ……主要通过人工智能解决的核心问题。为了实现这一目标，数据科学家需要确定必要的算法和数据特征。

---

Application data is required for training the algorithm. As a result, a view is offered that can encompass multiple application tables and carry out initial data transformations. From an extensibility perspective, both the training data view and the underlying persistence can be expanded. Additionally, the algorithm can be replaced, and the hyperparameters can be reconfigured. The artificial intelligence logic, in terms of data transformations and feature engineering, can be adapted to suit a specific customer situation. The inference API’s signature is also established during design time as part of the intelligent scenario. As a result, consuming applications and business processes can integrate the inference API during design time. However, the inference API only provides meaningful results once the underlying artificial intelligence model has been trained. The consumption API’s signature can be extended with optional fields. Before training any artificial intelligence models, certain readiness checks must be carried out. These evaluations are tailored to the specific artificial intelligence scenario and ensure that all necessary conditions for training have been met, such as the availability of adequate application data or the completion of required process configurations. Once these readiness checks have been successfully completed, the training process can begin. To initiate training, the training infrastructure is employed. This system retrieves the essential metadata from the relevant intelligent scenario, conducts the training, and saves the resulting trained model. The configuration encompasses both the scheduling of training tasks and the activation of artificial intelligence models. The inference infrastructure supplies the consumption API for the particular scenario and model, allowing the artificial intelligence capabilities to be incorporated into applications and business processes. The configuration and adaptability of user interfaces and business processes within the artificial intelligence application are addressed using already-established concepts and frameworks. Since these aspects are not specific to artificial intelligence, they are not discussed in this context.

**【译文】** 训练算法需要应用数据。因此，系统提供了一种视图，该视图可以涵盖多个应用表并执行初始的数据转换。从可扩展性的角度来看，训练数据视图和底层持久层都可以进行扩展。此外，算法可以被替换，超参数也可以重新配置。在数据转换和特征工程方面的人工智能逻辑，可以根据特定客户的情况进行调整。推理 API 的签名也是在设计阶段作为智能场景的一部分确立的。因此，消费端应用和业务流程可以在设计阶段就集成推理 API。然而，只有在底层人工智能模型经过训练后，推理 API 才能提供有意义的结果。消费 API 的签名可以通过可选字段进行扩展。在训练任何人工智能模型之前，必须执行特定的就绪检查。这些评估是针对特定人工智能场景定制的，旨在确保所有必要的训练条件都已满足，例如是否有充足的应用数据或是否完成了所需的流程配置。一旦成功完成这些就绪检查，训练过程即可开始。为了启动训练，需要使用训练基础设施。该系统从相关的智能场景中检索必要的元数据，执行训练，并保存生成的已训练模型。配置工作包括训练任务的调度和人工智能模型的激活。推理基础设施为特定场景和模型提供消费 API，从而允许将人工智能能力整合到应用程序和业务流程中。人工智能应用中用户界面和业务流程的配置及适应性，是通过既有的概念和框架来解决的。由于这些方面并非人工智能所特有，因此不在本文的讨论范围内。

---

As previously noted, the primary focus of the configuration implementation lies in supporting multiple models and managing model hyperparameters. Additional requirements are handled by artificial intelligence life cycle management and do not necessitate further exploration in this section.

**【译文】** 如前所述，配置实施的主要重点在于支持多种模型和管理模型超参数。其他需求由人工智能生命周期管理来处理，因此本节无需进一步探讨。

---

11.2.1 Multiple Model Support Configuration

**【译文】** 11.2.1 多模型支持配置

---

11.2.2 Model Hyperparameter Configuration

**【译文】** 11.2.2 模型超参数配置

---

