# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第69部分

**原始页码**: 205 - 207
**段落数量**: 14
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 204-204 (2329 字符)
- **后文上下文页码**: 208-208 (1741 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. **Core Data Model (CDM)**: 翻译为'核心数据模型'，是ERP系统中常用的数据建模概念。
2. **Consumption API**: 翻译为'消费端API'，指供前端应用或流程调用的API接口。
3. **Key User**: 翻译为'关键用户'，ERP领域特指具有部分配置权限的高级业务用户。
4. **Runtime Authoring**: 翻译为'运行时编辑'，指在应用运行时直接调整UI布局或字段的功能（如SAP Fiori RTA）。
5. **Function Modules**: 翻译为'功能模块'，在SAP/ERP开发中指封装特定逻辑的代码单元。
6. **Persistence**: 翻译为'持久层'，指数据库存储层面。

---

•	Training data source extension: The accuracy of artificial intelligence models can be enhanced by incorporating more attributes. Customers should be able to extend the ERP-delivered core data model view for model training with additional fields. Various options must be supported, such as adding fields from extended applications, lower-level core data model views, new core data model views, and external datasets.

**【译文】** •	**训练数据源扩展**：通过包含更多属性，可以提高人工智能模型的准确性。客户应该能够通过添加额外字段，来扩展ERP交付的用于模型训练的核心数据模型（Core Data Model）视图。系统必须支持多种选项，例如从扩展的应用程序、更底层的核心数据模型视图、新的核心数据模型视图以及外部数据集中添加字段。

---

•	Algorithm exchange: The predictive power of artificial intelligence models can be improved by altering the algorithm. Customers should be able to replace the predefined algorithm with a new one of the same type, such as switching from linear regression to exponential regression. To accomplish this, a customer’s data scientists must conduct explorations and experiments to identify the best algorithm for their specific situation and data environment.

**【译文】** •	**算法交换**：通过更改算法可以提高人工智能模型的预测能力。客户应该能够用同类型的相关算法替换预定义的算法，例如从线性回归切换到指数回归。为实现这一点，客户的数据科学家必须进行探索和实验，以确定最适合其特定情况和数据环境的最佳算法。

---

•	Artificial intelligence logic extension: Artificial intelligence logic encompasses aspects like data preparation, feature engineering, and transformations. By extending the predefined pipelines of artificial intelligence logic, model accuracy can be improved. Customers must be able to extend the predefined artificial intelligence logic, with data scientists conducting explorations and experiments to determine the best approach for their specific situation and data environment.

**【译文】** •	**人工智能逻辑扩展**：人工智能逻辑涵盖数据准备、特征工程和转换等方面。通过扩展预定义的人工智能逻辑管道（Pipelines），可以提高模型准确性。客户必须能够扩展预定义的人工智能逻辑，并由数据科学家进行探索和实验，以确定最适合其特定情况和数据环境的最佳方法。

---

•	Consumption API extension: The consumption API encapsulates the artificial intelligence model and makes it available for integration into applications and business processes. This API includes the necessary request-and-response signature for interacting with the trained model. To prevent disruptions to consuming applications and business processes, the API must remain stable and be extended compatibly. Customers should be able to extend the consumption API with optional fields, such as statistical KPIs to explain prediction results.

**【译文】** •	**消费端API扩展**：消费端API对人工智能模型进行封装，使其能够集成到应用程序和业务流程中。该API包含与训练好的模型进行交互所需的请求和响应签名。为了防止对消费端应用程序和业务流程造成中断，API必须保持稳定并支持兼容性扩展。客户应该能够使用可选字段（例如用于解释预测结果的统计KPI）来扩展消费端API。

---

•	New artificial intelligence application: Customers and partners should have the ability to create a new artificial intelligence application from the ground up. This involves modeling core data model views for training, creating intelligent scenarios, defining consumption APIs, and integrating them into business logic. Subsequent development activities are not specific to artificial intelligence, so ERP concepts and tools can be reused.

**【译文】** •	**全新人工智能应用程序**：客户和合作伙伴应具备从头开始创建新人工智能应用程序的能力。这涉及为训练建模核心数据模型视图、创建智能场景、定义消费端API以及将其集成到业务逻辑中。后续的开发活动并非人工智能特有的，因此可以重用ERP的概念和工具。

---

•	Extensibility life cycle management: All extensibility capabilities provided to customers must continue to function after patches and upgrades without manual intervention. Extensibility should adhere to the whitelisting approach and only offer measures or objects for extensibility that are designed for those purposes. Changes to the core ERP software must not compromise customer extensions. There should be a clear distinction between standard functionality and extensions, such as through a namespace concept. Extension mechanisms must not compromise the system’s integrity, and time-consuming activities before and after upgrades should be avoided. All extensions are created and transported across the system landscape using standard ERP mechanisms, ensuring that a transport contains a complete extension without the need for additional activities and tools.

**【译文】** •	**扩展性生命周期管理**：提供给客户的所有扩展功能必须在补丁更新和系统升级后继续有效，且无需人工干预。扩展性应遵循白名单（whitelisting）方法，仅提供专为此目的设计的扩展措施或对象。核心ERP软件的更改不得破坏客户的扩展。标准功能和扩展之间应有清晰的区分，例如通过命名空间概念来实现。扩展机制不得损害系统的完整性，并且应避免在升级前后进行耗时的活动。所有扩展都是使用标准ERP机制创建并在系统架构中传输的，确保一次传输包含完整的扩展，无需额外的活动和工具。

---

12.2 Solution Proposal
In this chapter, we resolve the extensibility requirements identified in the previous section.

**【译文】** ### 12.2 解决方案建议
在本章中，我们将针对上一节中确定的扩展性需求提出解决方案。

---

12.2.1 Training Data Source Extension
The need to expand the training data source involves incorporating more fields to enhance the predictive capabilities of the artificial intelligence model. The choice of additional data fields determines the suitable extensibility method, which may also be combined if needed:

**【译文】** ### 12.2.1 训练数据源扩展
扩展训练数据源的需求涉及通过包含更多字段，来增强人工智能模型的预测能力。对额外数据字段的选择决定了合适的扩展方法，如有需要，这些方法也可以组合使用：

---

•	Custom field extensions involve adding fields from extended applications.
•	Data source extensions incorporate fields from fundamental core data model views.
•	Custom core data model views that join other ERP views or include fields from new customer core data model views.
•	Custom core data model views that connect custom business objects and incorporate fields from external datasets.

**【译文】** •	**自定义字段扩展**：涉及从扩展的应用程序中添加字段。
•	**数据源扩展**：包含来自基础核心数据模型视图的字段。
•	**自定义核心数据模型视图**：连接其他ERP视图或包含来自新客户核心数据模型视图的字段。
•	**自定义核心数据模型视图**：连接自定义业务对象并包含来自外部数据集的字段。

---

The structural definition of local and remote application programming interfaces must include the extension as well. Based on the specific implementation, manually written sections in the application programming interface’s implementation need to be deliberately designed for expandability by invoking extensibility function modules, such as those that improve metadata or transfer extension data between internal and external structures.

**【译文】** 本地和远程应用程序编程接口（API）的结构定义也必须包含扩展内容。根据具体的实现方式，API实现中手动编写的部分需要特意设计为可扩展的，例如通过调用扩展性功能模块（Function Modules），这些模块可以完善元数据或在内部和外部结构之间传输扩展数据。

---

At a client location, a key user initiates the custom field user interface, which enables the user to define the technical aspects of a custom field (e.g., label, type, length) and offers a list of where the field is used. This tool can be used independently or, ideally, incorporated into the user interface’s runtime authoring.

**【译文】** 在客户端，关键用户（Key User）启动自定义字段用户界面，该界面允许用户定义自定义字段的技术属性（例如标签、类型、长度），并提供字段使用位置列表。该工具可以独立使用，或者最好集成到用户界面的运行时编辑（Runtime Authoring）功能中。

---

The list of where the field is used relies on the extensibility registry, which recognizes all application programming interfaces and core data model views and reveals the extended persistence. When choosing an entry in the list of where the field is used, the underlying application programming interface and core data model view are expanded.

**【译文】** 字段使用位置列表依赖于扩展性注册表（Extensibility Registry），该注册表能识别所有的API和核心数据模型视图，并显示扩展后的持久层（Extended Persistence）。当在字段使用位置列表中选择一个条目时，底层的API和核心数据模型视图即被扩展。

---

As a result, the relevant consumers have access to the extension field in their field catalog, and they can use it like any standard field provided by the enterprise resource planning solution. Following that, the data source extension enables customers to incorporate new enterprise resource planning standard fields from the underlying core data model views.

**【译文】** 因此，相关的消费者（Consumers）可以在其字段目录中访问该扩展字段，并且可以像使用企业资源规划（ERP）解决方案提供的任何标准字段一样使用它。随后，数据源扩展使客户能够从底层核心数据模型视图中纳入新的ERP标准字段。

---

The core data model view for model training is typically constructed on top of basic core data model views. These basic views may contain fields that could be integrated into the training process to enhance the predictive capabilities of the artificial intelligence model.

**【译文】** 用于模型训练的核心数据模型视图通常构建在基础核心数据模型视图之上。这些基础视图可能包含可以集成到训练过程中的字段，以增强人工智能模型的预测能力。

---

