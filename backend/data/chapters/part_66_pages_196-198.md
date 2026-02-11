# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第66部分

**原始页码**: 196 - 198
**段落数量**: 16
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 195-195 (2781 字符)
- **后文上下文页码**: 199-199 (2607 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. **TCI (Total Cost of Implementation)**: 译为“实施总成本”，指在ERP项目实施阶段的所有费用，区别于TCO（拥有总成本）。
2. **Company codes**: ERP（特别是SAP）中的标准术语，译为“公司代码”，代表独立的会计实体。
3. **Data segment**: 译为“数据分段”，指根据特定维度（如国家、产品线）将数据划分成的子集，用于训练特定的AI模型。
4. **Hyperparameters**: 译为“超参数”，机器学习中的标准术语，指在学习过程开始前设置的参数。
5. **Inference**: 译为“推理”，指使用训练好的模型进行预测的过程。

---

11
Configuration

**【译文】** 第11章
配置

---

In this chapter, we specify the business requirements and propose the solution concept for configuration. ERP software contains predefined artificial intelligence scenarios. This means that for a business question solved by artificial intelligence, all the needed development is provisioned. This includes integration to business processes and user interfaces, defining the data source for training, implementing transformations, and delivering predefined models. However, ERP customers or partners require adapting this artificial content to their specific needs based on configuration. The focus is on artificial intelligence-specific configuration while general concepts are taken as granted, such as configuration of user interfaces, forms, or analytics.

**【译文】** 在本章中，我们将明确业务需求并提出配置的解决方案概念。企业资源规划（ERP）软件包含预定义的人工智能场景。这意味着，对于一个通过人工智能解决的业务问题，所有必要的开发工作都已预置到位。这包括与业务流程和用户界面的集成、定义训练数据源、实施数据转换以及交付预定义模型。然而，ERP客户或合作伙伴需要通过配置将这些人工智能内容调整为适应其特定需求。我们的重点是人工智能特有的配置，而诸如用户界面、表单或分析的配置等通用概念则被视为既定基础（不在此赘述）。

---

11.1	 Problem Statement

**【译文】** 11.1	 问题陈述

---

Configuration is the process of setting up or adjusting systems at a customer’s location to adopt the provided functions with the customer’s business needs. This process, also known as customization, is carried out by using the predefined variability of the underlying models. ERP products have always excelled in offering a high degree of flexibility and a broad array of customization options. This allows the standard definition of business software to be adjusted and expanded to address the requirements of each individual user. Presently, ERP systems provide thousands of unique settings for tailoring an installation to suit specific company’s needs.

**【译文】** 配置是在客户现场设置或调整系统，以使提供的功能适应客户业务需求的过程。这一过程也被称为定制（customization），是通过利用底层模型预定义的可变性来执行的。ERP产品一直以提供高度的灵活性和广泛的定制选项而著称。这使得业务软件的标准定义得以调整和扩展，以满足每个独立用户的需求。目前，ERP系统提供数千种独特的设置，用于调整安装环境以适应特定公司的需求。

---

However, it is crucial to determine which configuration combinations are semantically correct, which ones result in a reliable business process, and which ones strike the ideal balance between diversification and efficiency. For over a decade, ERP products have supplied reference content, enabling customers to equip their solutions with a consistent and reliable pre-configuration of all relevant business processes and supporting features. This pre-configuration fulfills three key criteria:

**【译文】** 然而，至关重要的是要确定哪些配置组合在语义上是正确的，哪些能带来可靠的业务流程，以及哪些能在多样化和效率之间取得理想的平衡。十多年来，ERP产品一直提供参考内容，使客户能够为其解决方案配备一致且可靠的预配置，涵盖所有相关的业务流程和支持功能。这种预配置满足了三个关键标准：

---

•	 Quick implementation: Pre-configuration allows for the initiation of ERP system implementation with a basic, consistent set of configurations. In many business domains, customers can start by accepting standard settings as the default and then defining custom settings in focus areas. This approach enables customers to quickly launch a fully functional solution and further customize the application later, reducing the initial total cost of implementation (TCI) and leading to faster deployment and go live.

**【译文】** •	 快速实施：预配置允许使用一套基础、一致的配置集来启动ERP系统的实施。在许多业务领域，客户可以先接受标准设置作为默认值，然后在重点领域定义自定义设置。这种方法使客户能够快速启动一个功能齐全的解决方案，并在稍后进一步定制应用程序，从而降低初始实施总成本（TCI），实现更快的部署和上线。

---

•	 Best practices-based approach: ERP vendors draw on their extensive experience to offer a best-of-breed solution for an enterprise’s core business processes. Best-practice content achieves a balance between high performance, robust flexibility, and country-specific nuances. This reference content is not inflexible; it can be adjusted and extended at various points. On the other hand, the reference content serves as a de facto standard that allows for a reliable and quick implementation.

**【译文】** •	 基于最佳实践的方法：ERP供应商利用其丰富的经验，为企业的核心业务流程提供顶尖（best-of-breed）的解决方案。最佳实践内容在高性能、强大的灵活性和国家特定细微差别之间取得了平衡。这种参考内容并非一成不变；它可以在多个节点进行调整和扩展。另一方面，参考内容作为事实上的标准，使得实施过程既可靠又迅速。

---

•	 Life cycle compatibility: The business world and the reference content are constantly evolving. The speed at which innovations are adopted in ERP software is a crucial differentiator. New innovations must be easily accessible, simple to use, and highly reliable in terms of quality and performance. Consequently, ERP vendors integrate these changes into the reference content and regularly update the affected installations. However, these updates must not compromise the stability of customers’ operational environments. Therefore, the reference content is enriched with life cycle-relevant metadata to manage how changes in existing implementations should be addressed during the upgrade. This enables a secure, automated upgrade process, which is an essential quality. Incompatible changes with the software and its content’s life cycle are avoided.

**【译文】** •	 生命周期兼容性：商业世界和参考内容都在不断发展。ERP软件采纳创新的速度是一个关键的差异化因素。新的创新必须易于获取、使用简单，并且在质量和性能方面高度可靠。因此，ERP供应商将这些变更整合到参考内容中，并定期更新受影响的安装环境。然而，这些更新绝不能损害客户运营环境的稳定性。因此，参考内容丰富了与生命周期相关的元数据，用于管理在升级过程中如何处理现有实施中的变更。这实现了一个安全、自动化的升级过程，而这是一项至关重要的品质。同时，也避免了与软件及其内容生命周期不兼容的变更。

---

A significant portion of a company’s required business functionality is determined by the function of its organizational unit. The unit’s purpose must be considered, such as whether it is a sales office, a legal entity, or merely a division of the company. Configuration must accommodate multiple organizational units within a single tenant and separate them using dedicated company codes. Consequently, the configuration and related content must incorporate the appropriate company code for the customizing settings to distinguish between the units. Additionally, the scope varies depending on the purpose of the organizational unit. An organizational unit is usually linked to a physical installation and, therefore, assigned to a legal space. The legal space also influences the selection of correct configuration settings, as country-specific settings that either support legal compliance or represent regional best practices must be chosen over global or general ones.

**【译文】** 公司所需的很大一部分业务功能取决于其组织单元的职能。必须考虑该单元的用途，例如它是销售办事处、法律实体，还是仅仅是公司的一个部门。配置必须在一个单一租户内适应多个组织单元，并使用专用的公司代码（company codes）将它们区分开来。因此，配置及相关内容必须在定制设置中包含适当的公司代码，以区分不同的单元。此外，业务范围也因组织单元的用途而异。组织单元通常与物理设施相关联，因此被分配到一个法律辖区。法律辖区也会影响正确配置设置的选择，因为必须优先选择支持法律合规或代表区域最佳实践的国家特定设置，而不是全球或通用的设置。

---

In the context of artificial intelligence, it is crucial to take into account the following use cases for configuration:

**【译文】** 在人工智能的背景下，必须考虑以下配置用例：

---

•	 Support for multiple models: For the same scenario, it is essential to have active artificial intelligence models for each data segment. This approach, as opposed to using a single model, can enhance prediction accuracy. For instance, a sales revenue prediction model for all countries may not be as accurate as individual models for each country that take into account specific country characteristics. The artificial intelligence application consuming these models should not manage them individually but rather through a single, stable API. The artificial intelligence infrastructure should automatically determine the appropriate model for a given inference request.

**【译文】** •	 支持多模型：对于同一场景，必须为每个数据分段（data segment）配备活跃的人工智能模型。与使用单一模型相比，这种方法可以提高预测准确性。例如，针对所有国家的销售收入预测模型，可能不如考虑到特定国家特征的分国别独立模型准确。调用这些模型的人工智能应用程序不应单独管理它们，而应通过一个单一、稳定的API进行管理。人工智能基础设施应自动确定针对给定推理请求的合适模型。

---

•	 Model hyperparameters: When an artificial intelligence algorithm is tailored for a specific data environment, the model’s hyperparameters are configured. These hyperparameters are determined without using actual observed data. Examples include the number of clusters in K-means clustering, the number of leaves in a tree, or the number of hidden layers in a deep neural network. There is a need for mechanisms and tools to maintain, deliver, and apply these hyperparameters.

**【译文】** •	 模型超参数：当针对特定数据环境调整人工智能算法时，需要配置模型的超参数。这些超参数是在不使用实际观测数据的情况下确定的。例如，K-均值聚类（K-means clustering）中的簇数量、树中的叶子数量或深度神经网络中的隐藏层数量。我们需要相应的机制和工具来维护、交付和应用这些超参数。

---

•	 Configuration life cycle management: User interfaces are necessary for customers to maintain configuration data. It should be possible to manage this data in a test system and securely transfer it to a production system. Configuration data must be stored separately from system and application data. Mechanisms and tools are needed to deliver and apply configurations. Only configuration actions that align with customers’ activated ERP business scopes should be suggested. All configurations provided to customers must continue to work after patches and upgrades without manual intervention. Changes to core ERP software must not compromise customer configurations, and extension mechanisms must not jeopardize the ERP system’s integrity. Additionally, time-consuming activities before and after upgrades should be minimized.

**【译文】** •	 配置生命周期管理：客户需要用户界面来维护配置数据。系统应支持在测试系统中管理这些数据，并将其安全地传输到生产系统。配置数据必须与系统数据和应用程序数据分开存储。需要机制和工具来交付和应用配置。系统应仅建议与客户已激活的ERP业务范围相一致的配置操作。提供给客户的所有配置必须在补丁更新和升级后继续有效，无需人工干预。核心ERP软件的变更不得破坏客户的配置，扩展机制也不得危及ERP系统的完整性。此外，应尽量减少升级前后的耗时活动。

---

•	 Model training and validation: For artificial intelligence model training, jobs must be scheduled, either as regular jobs or events. Customers must explicitly activate and deploy trained models for use. Before doing so, they should be able to validate the models. When model accuracy declines, automated retraining should be facilitated to address model degradation. Suitable mechanisms and tools are needed for these activities.

**【译文】** •	 模型训练与验证：对于人工智能模型训练，必须通过常规作业或事件来调度任务。客户必须明确激活并部署训练好的模型以供使用。在此之前，他们应能够验证模型。当模型准确性下降时，应通过自动再训练来解决模型退化问题。这些活动需要合适的机制和工具支持。

---

While configuration life cycle management and model training and validation are specific to artificial intelligence, they do not require further investigation here, as they are covered by artificial intelligence life cycle management and tools discussed in the previous life cycle management chapter. However, solutions are needed for multiple model support and model hyperparameters, which are considered in this section.

**【译文】** 虽然配置生命周期管理以及模型训练与验证是针对人工智能的，但在此不需要进一步研究，因为这已在前一章关于人工智能生命周期管理和工具的内容中涵盖。然而，我们需要针对支持多模型和模型超参数的解决方案，这将在本节中进行探讨。

---

11.2	 Solution Proposal

**【译文】** 11.2	 解决方案建议

---

