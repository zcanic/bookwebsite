# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第70部分

**原始页码**: 208 - 210
**段落数量**: 19
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 207-207 (1822 字符)
- **后文上下文页码**: 211-211 (722 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Core Data Model View' 翻译为 '核心数据模型视图'，符合SAP CDS View的中文习惯。
2. 'Key User' 翻译为 '关键用户'，指具有部分配置权限的业务用户。
3. 'SQL Projection' 翻译为 'SQL投影'。
4. 'Custom Business Object' 翻译为 '自定义业务对象'。
5. 'Robust linear regression' 翻译为 '稳健线性回归'。
6. 'Conduct a trace' 翻译为 '执行追踪'，指调试或系统追踪。
7. 'Feature reduction' 翻译为 '特征缩减'，指AI特征工程中的降维或筛选过程。

---

application. Including extra standard fields may allow end users to access restricted data in the expanded data source without the necessary authorization. Moreover, depending on the field path and the nature of the chosen fields, data retrieval might become slower after a data source extension has been implemented.

**【译文】** 包含额外的标准字段可能会允许最终用户在没有必要授权的情况下，访问扩展数据源中的受限数据。此外，根据字段路径和所选字段的性质，实施数据源扩展后，数据检索可能会变慢。

---

If the previously mentioned methods of customer field and data source extension are insufficient or inapplicable, new core data model view modeling is necessary. Situations where this may occur include needing fields from core data model views of other view hierarchies or when the training core data model view is not registered for data source extension.

**【译文】** 如果上述客户字段和数据源扩展方法不足或不适用，则需要进行新的核心数据模型视图建模。这种情况可能发生在需要来自其他视图层级的核心数据模型视图的字段时，或者当用于训练的核心数据模型视图未注册进行数据源扩展时。

---

A new training core data model view can be established to combine fields from other core data model view hierarchies, access different data tables, or reduce the fields of existing training core data model views using SQL projection.

**【译文】** 可以建立一个新的训练核心数据模型视图，以组合来自其他核心数据模型视图层级的字段、访问不同的数据表，或使用SQL投影减少现有训练核心数据模型视图的字段。

---

We suggest introducing a Custom Core Data Model View app, which allows key users to model customer-specific data access on top of public core data model views. Additionally, previously created custom core data model views should serve as a foundation for new custom core data model views.

**【译文】** 我们建议引入一个“自定义核心数据模型视图”应用程序，允许关键用户在公共核心数据模型视图之上对客户特定的数据访问进行建模。此外，先前创建的自定义核心数据模型视图应作为新自定义核心数据模型视图的基础。

---

The Custom Core Data Model View application should offer the following features:
• Display a list of all ERP-delivered data sources and existing custom data sources, including personal custom core data model views
• Show details of available data sources and custom core data model views
• Search for a specific data source or custom core data model view
• Filter by data source name, label, type, and the user who last published the view
• Create a core data model view

**【译文】** “自定义核心数据模型视图”应用程序应提供以下功能：
• 显示所有ERP交付的数据源和现有自定义数据源的列表，包括个人自定义核心数据模型视图
• 显示可用数据源和自定义核心数据模型视图的详细信息
• 搜索特定数据源或自定义核心数据模型视图
• 按数据源名称、标签、类型和上次发布该视图的用户进行筛选
• 创建核心数据模型视图

---

In the context of creating core data model views, the application should support these steps:
1. Define the name and description of the new custom view.
2. Choose a data source to be used as the primary data source.
3. Add one or more associated data sources.
4. Assign the mapping fields of the associated data sources to the fields of the primary data source.
5. Select the fields and associations to be used in the new custom core data model view.
6. Expose the custom core data model view through a REST service for external use.
7. Make changes to the semantics of the selected data sources for use within the new custom core data model view.
8. Display the parameters of the selected data sources if they contain a filter for the result set.

**【译文】** 在创建核心数据模型视图的背景下，应用程序应支持以下步骤：
1. 定义新自定义视图的名称和描述。
2. 选择一个数据源作为主要数据源。
3. 添加一个或多个关联数据源。
4. 将关联数据源的映射字段分配给主要数据源的字段。
5. 选择要在新自定义核心数据模型视图中使用的字段和关联。
6. 通过REST服务公开自定义核心数据模型视图以供外部使用。
7. 更改所选数据源的语义，以便在新自定义核心数据模型视图中使用。
8. 如果所选数据源包含结果集过滤器，则显示其参数。

---

To enhance the precision of artificial intelligence models, it may also be essential to broaden the training data source by incorporating customer-specific tables. This concept of table extensibility refers to the ability to add fields unique to a customer within the business context of an application, either in a one-to-one or one-to-many relationship.

**【译文】** 为了提高人工智能模型的精度，通过合并客户特定的表来扩展训练数据源可能也是必不可少的。这种表可扩展性的概念是指在应用程序的业务上下文中，以一对一或一对多关系添加客户特有字段的能力。

---

New tables tailored to the customer are generated in the database and paired with core data model views. These core data model views can be merged with the provided core data model view for model training, resulting in a new data source.

**【译文】** 为客户量身定制的新表在数据库中生成，并与核心数据模型视图配对。这些核心数据模型视图可以与提供的用于模型训练的核心数据模型视图合并，从而产生一个新的数据源。

---

In the context of customer-specific tables, there are two types of enhancements that can be identified:
• New independent custom tables that are not sub-tables of ERP tables are populated through a user interface or data import from other customer systems. These independent tables may serve as code lists, process control tools, or facts or dimensions for transactional and analytical purposes. An additional enhancement could involve grouping several independent custom tables into a hierarchy, forming a new application with basic business logic. This feature is accessible as a custom business object.

**【译文】** 在客户特定表的背景下，可以识别出两种类型的增强：
• 新的独立自定义表（非ERP表的子表）通过用户界面或从其他客户系统导入数据来填充。这些独立表可以用作代码列表、流程控制工具，或者作为事务和分析目的的事实或维度。额外的增强可能涉及将几个独立自定义表分组为一个层级结构，从而形成一个具有基本业务逻辑的新应用程序。此功能可作为“自定义业务对象”访问。

---

• Custom tables are used to introduce fields to ERP business contexts in a one-to-many relationship (e.g., a customer’s hobbies) or to address the technical limitations of field extensibility in the case of one-to-one relationship extensions. In this scenario, the custom data behaves similarly to standard ERP data (for instance, inheriting authorization from the ERP parent), and custom data is removed when the parent is deleted. This use case necessitates that ERP applications be designed for this type of extensibility, which is typically not the case.

**【译文】** • 自定义表用于以一对多关系（例如，客户的爱好）向ERP业务上下文引入字段，或解决一对一关系扩展情况下字段可扩展性的技术限制。在这种情况下，自定义数据的行为类似于标准ERP数据（例如，继承ERP父级的授权），并且当父级被删除时，自定义数据也会被移除。此用例要求ERP应用程序针对此类可扩展性进行设计，而通常情况并非如此。

---

We propose developing a Custom Business Object application that allows customers to create and manage business objects. A custom business object is a hierarchical collection of database tables with an API for creating, retrieving, updating, and deleting data. Business logic can be supplied in a Web editor using code.

**【译文】** 我们建议开发一个“自定义业务对象”应用程序，允许客户创建和管理业务对象。自定义业务对象是数据库表的层级集合，具有用于创建、检索、更新和删除数据的API。业务逻辑可以使用代码在Web编辑器中提供。

---

The Custom Business Object application should support the following features:
• Create business objects and their corresponding database tables
• Add fields to business objects
• Remove fields and business objects that have not yet been transferred to the production system
• Create core data model views, REST services, and a user interface for data entry or importing data from other customer systems
• Establish multiple sub-nodes for a single business object
• Define fields of association type to other custom business objects and standard ERP business objects
• Implement custom logic at the node level
• Write to custom business objects from custom logic
• Publish business objects
• Modify published business objects
• Revert business objects to their most recent published version
• Copy or delete an existing custom business object
• Conduct a trace

**【译文】** “自定义业务对象”应用程序应支持以下功能：
• 创建业务对象及其对应的数据库表
• 向业务对象添加字段
• 移除尚未传输到生产系统的字段和业务对象
• 创建核心数据模型视图、REST服务以及用于数据录入或从其他客户系统导入数据的用户界面
• 为单个业务对象建立多个子节点
• 定义关联类型的字段，以连接其他自定义业务对象和标准ERP业务对象
• 在节点级别实现自定义逻辑
• 从自定义逻辑写入自定义业务对象
• 发布业务对象
• 修改已发布的业务对象
• 将业务对象恢复到其最近发布的版本
• 复制或删除现有的自定义业务对象
• 执行追踪

---

The intelligent scenario automatically reflects the data source extension, depending on how it is expanded, as it only maintains a reference to the core data model view. Specifically, the data source extension must not result in an incompatible change to the consumption API.

**【译文】** 智能场景会自动反映数据源扩展，具体取决于其扩展方式，因为它只维护对核心数据模型视图的引用。具体而言，数据源扩展不得导致消费API发生不兼容的更改。

---

12.2.2 Algorithm Exchange and Artificial intelligence Logic Extension

**【译文】** 12.2.2 算法交换与人工智能逻辑扩展

---

Now, let us discuss the exchange of algorithms and the expansion of artificial intelligence logic. The term artificial intelligence logic pertains to the implementation of necessary steps for the processing of training and inference. These steps encompass data validation, statistical calculations, transformations, feature reduction, and the computation of model accuracy metrics.

**【译文】** 现在，让我们讨论算法的交换和人工智能逻辑的扩展。术语“人工智能逻辑”是指实施训练和推理处理所需步骤。这些步骤包括数据验证、统计计算、转换、特征缩减以及模型准确性指标的计算。

---

The artificial intelligence logic for training and inference is tailored to specific scenarios. Expanding artificial intelligence logic involves adapting the ERP standard-delivered content with customer enhancements that can withstand upgrades.

**【译文】** 用于训练和推理的人工智能逻辑是针对特定场景定制的。扩展人工智能逻辑涉及通过可承受升级的客户增强功能来调整ERP标准交付的内容。

---

In the context of training logic, algorithms can be primarily exchanged to enhance the predictive power of the model. However, it is typically meaningful to replace an algorithm with another of the same type, such as substituting linear regression with robust linear regression.

**【译文】** 在训练逻辑的背景下，交换算法主要是为了增强模型的预测能力。然而，通常用同类型的另一种算法进行替换是有意义的，例如用稳健线性回归代替线性回归。

---

To augment artificial intelligence logic, different approaches are needed based on the underlying technology:
• Automated Library

**【译文】** 为了增强人工智能逻辑，需要根据底层技术采用不同的方法：
• 自动化库

---

• The artificial intelligence logic for training and inference is integrated into the library implementation itself. Consequently, the required artificial intelligence logic is supplied automatically by the library. Enhancements are driven by metadata and are also provided without explicit development activities. Various AutoML libraries in the community operate in this manner.

**【译文】** • 用于训练和推理的人工智能逻辑集成在库实现本身中。因此，所需的人工智能逻辑由库自动提供。增强功能由元数据驱动，并且无需显式的开发活动即可提供。社区中的各种AutoML库都以这种方式运作。

---

