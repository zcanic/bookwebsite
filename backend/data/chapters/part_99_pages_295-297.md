# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第99部分

**原始页码**: 295 - 297
**段落数量**: 4
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 294-294 (2081 字符)
- **后文上下文页码**: 298-298 (147 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Side-by-side' 翻译为 '并行'，这是SAP生态中相对于 'Embedded' (嵌入式) 的标准对应翻译，指在ERP系统外部（如BTP平台）运行扩展应用。 
2. 'CDS view' 保留通用缩写，翻译为 'CDS视图'。
3. 'Pipeline' 在AI工程上下文中翻译为 '管道'。
4. 'Operator' 在数据处理和算法上下文中翻译为 '算子'。

---

that developers need to implement. Regardless of the type of artificial intelligence approach being used, there are certain elements – specifically, the artificial intelligence application, intelligent scenario, and CDS view (core data model view) – that are essential and are depicted in the center of Fig. 20.1. The artificial intelligence application serves as the integration point for incorporating artificial intelligence capabilities into business processes and associated user interfaces. The intelligent scenario acts as a connector for all the development components required for the artificial intelligence application and is particularly useful for managing life cycle aspects. The CDS view is designed to access application data for model training. In the case of this ABAP component, a SQL view is created on top of the application tables during the activation phase. All SQL requests are then directed from ABAP to the SQL view, ensuring maximum performance.

**【译文】** ……开发人员需要实现的[工件]。无论采用哪种人工智能方法，某些元素——具体来说是AI应用程序、智能场景和CDS视图（核心数据模型视图）——都是必不可少的，如图20.1中心所示。AI应用程序作为一个集成点，用于将人工智能能力融入业务流程和相关的用户界面中。智能场景充当AI应用程序所需的所有开发组件的连接器，在管理生命周期方面特别有用。CDS视图旨在访问应用程序数据以进行模型训练。对于这个ABAP组件，在激活阶段会在应用程序表之上创建一个SQL视图。然后，所有的SQL请求都会从ABAP指向该SQL视图，以确保最佳性能。

---

For use cases of embedded artificial intelligence that rely on the Automated Predictive Library (APL), there’s no need for development. This is because the Intelligent Scenario Lifecycle Management framework automatically generates the necessary components. This is achievable due to the fact that the Automated Predictive Library includes the logic of artificial intelligence for both training and making predictions within its own implementation. Therefore, if the algorithms supported by the Automated Predictive Library are adequate for a particular use case, this method is the preferred choice from a development perspective, mainly because it keeps the total cost of development low.

**【译文】** 对于依赖自动预测库（APL）的嵌入式人工智能用例，不需要进行额外开发。这是因为“智能场景生命周期管理”框架会自动生成必要的组件。这之所以能够实现，是因为自动预测库在其自身的实现中，已经包含了用于训练和进行预测的AI逻辑。因此，如果自动预测库支持的算法足以满足特定的用例，那么从开发角度来看，该方法是首选，主要是因为它能保持较低的总体开发成本。

---

For embedded artificial intelligence use cases that depend on the Predictive Analytics Library (PAL), a class for the ABAP Managed Database Procedure must be provided. This class includes methods for training and making predictions, which are implemented in SQLScript to include the necessary artificial intelligence logic. The Predictive Analytics Library is utilized for scenarios that require specific data validations, transformations, or feature reductions, which are not supported by Automated Predictive Library. The ABAP Managed Database Procedure (AMDP) class must implement a predefined interface and is under the control of the developer, allowing for the development of complex logic.

**【译文】** 对于依赖预测分析库（PAL）的嵌入式人工智能用例，必须提供一个ABAP托管数据库过程（AMDP）的类。该类包含用于训练和进行预测的方法，这些方法是用SQLScript实现的，以包含必要的AI逻辑。预测分析库用于需要特定数据验证、转换或特征缩减的场景，而自动预测库不支持这些功能。ABAP托管数据库过程（AMDP）类必须实现预定义的接口，并由开发人员控制，从而允许开发复杂的逻辑。

---

For side-by-side artificial intelligence use cases that work alongside the SAP Business Technology Platform (SAP BTP), pipelines for training and making predictions must be provided to include the necessary artificial intelligence logic. These pipelines are either graphically modeled or coded based on operators for transformation, validation, or the inclusion of algorithms. The development object scenario serves as the connection between all development components to manage the life cycle. The training and prediction pipelines are made available by REST services to the SAP S/4HANA platform. An ABAP class is necessary to encapsulate these REST services and make them usable by ABAP methods.

**【译文】** 对于配合SAP业务技术平台（SAP BTP）使用的并行（side-by-side）人工智能用例，必须提供用于训练和预测的管道（pipelines），以包含必要的AI逻辑。这些管道可以是图形化建模的，也可以是基于用于转换、验证或包含算法的算子（operators）进行编码的。开发对象“场景”作为所有开发组件之间的连接，用于管理生命周期。训练和预测管道通过REST服务提供给SAP S/4HANA平台。此时需要一个ABAP类来封装这些REST服务，并使其可供ABAP方法调用。

---

