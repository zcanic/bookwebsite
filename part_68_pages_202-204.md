# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第68部分

**原始页码**: 202 - 204
**段落数量**: 13
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 201-201 (102 字符)
- **后文上下文页码**: 205-205 (3297 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Hyperparameter (超参数): 机器学习中在训练前设置的参数，用于控制学习过程。 
2. Extensibility (可扩展性): 指系统适应变化和增强功能的能力，在ERP语境下通常特指在不修改核心代码的前提下添加新功能。 
3. Configuration (配置) vs Customizing (定制): 文中Configuration侧重于参数设置，而Customizing在ERP中通常指更广泛的系统调整。 
4. On-premise (本地部署): 区别于云端部署的传统软件部署模式。

---

The logic behind artificial intelligence involves transforming data, engineering features, initiating algorithms, and executing postprocessing steps. To ensure adaptability, parameters are incorporated into the artificial intelligence logic rather than using fixed values. As a result, various values can be assigned to these parameters during the configuration process. This is particularly true for hyperparameters within the artificial intelligence algorithms, which are adjusted to suit specific customer scenarios, thereby enhancing model precision.

**【译文】** 人工智能背后的逻辑涉及数据转换、特征工程、算法初始化以及执行后处理步骤。为了确保适应性，人工智能逻辑中引入了参数，而不是使用固定值。因此，在配置过程中可以为这些参数分配不同的值。对于人工智能算法中的超参数（Hyperparameters）尤其如此，通过调整这些超参数以适应特定的客户场景，从而可以提高模型的精度。

---

Depending on the needs of the particular use case, the artificial intelligence logic can be either programmed or visually represented. While coding offers greater expressiveness, graphical models provide a more comprehensive view. In instances where the artificial intelligence logic requires adaptable configurations, relevant parameters are implemented. Specific values for these parameters can be managed through a universal configuration user interface composed of key-value pairs.

**【译文】** 根据特定用例的需求，人工智能逻辑可以通过编程方式实现，也可以通过可视化方式呈现。虽然代码编程提供了更强的表达能力，但图形化模型提供了更直观的全局视图。在人工智能逻辑需要适应性配置的情况下，系统会实施相关的参数。这些参数的具体值可以通过由键值对（Key-Value Pairs）组成的通用配置用户界面进行管理。

---

11.3 Conclusion
ERP systems deliver predefined artificial intelligence scenarios. This means that for a business question solved by artificial intelligence, all the needed development is provisioned: integration to business processes and user interfaces, defining the data source for training, and delivering predefined models.

**【译文】** 11.3 结论
企业资源规划（ERP）系统提供了预定义的人工智能场景。这意味着，对于由人工智能解决的业务问题，所有必要的开发工作都已预置：包括与业务流程和用户界面的集成、定义训练数据源以及交付预定义模型。

---

However, customers or partners might require adapting this artificial intelligence content to their specific needs based on configuration and extensibility. We focused in this section on artificial intelligence-specific configuration, which is the process by which customers and partners adopt ERP functionality based on predefined variability.

**【译文】** 然而，客户或合作伙伴可能需要基于配置和可扩展性，将这些人工智能内容调整以适应其特定需求。本节我们重点讨论了人工智能特定的配置，即客户和合作伙伴基于预定义的变量采用ERP功能的过程。

---

ERP products’ ability to provide a high degree of flexibility and thus a wide range of customizing options has always been a core strength. This enables standard business software definitions to be adjusted and extended to meet the needs of each individual consumer.

**【译文】** ERP产品能够提供高度灵活性以及广泛的定制选项，这一直是其核心优势。这使得标准商业软件定义能够被调整和扩展，以满足每个独立客户的需求。

---

We identified the configuration requirements of multiple model support, model hyper-parameterization and the life cycle management of configuration data. For those, we proposed a corresponding solution so that, for example, concurrent models can be run for the same scenario considering specifics of different data segments and resulting into improved accuracy (e.g., different model for each country instead of a global model for all countries).

**【译文】** 我们确定了多模型支持、模型超参数化以及配置数据生命周期管理的配置需求。针对这些需求，我们提出了相应的解决方案，例如，可以针对同一场景运行并发模型，考虑到不同数据分段的特性从而提高准确性（例如，为每个国家/地区使用不同的模型，而不是所有国家/地区使用同一个全局模型）。

---

12 Extensibility
In this chapter, we specify the business requirements and propose the solution concept for extensibility. ERP software includes predefined artificial intelligence scenarios. However, customers or partners might require adopting this artificial intelligence-related content to their specific needs based on extensibility.

**【译文】** 第12章 可扩展性
在本章中，我们将阐述业务需求并提出可扩展性的解决方案概念。ERP软件包含预定义的人工智能场景。然而，客户或合作伙伴可能需要基于可扩展性将这些与人工智能相关的内容调整以适应其特定需求。

---

This might be also necessary for use cases ERP customers or partners develop by themselves. Thus, technical solution is required, which allows enhancements of existing use cases while those extensions are protected from upgrades to avoid been overwritten.

**【译文】** 对于ERP客户或合作伙伴自行开发的用例，这也可能是必要的。因此，需要一种技术解决方案，它既允许增强现有用例，又能保护这些扩展内容在系统升级时不被覆盖。

---

12.1 Problem Statement
The following definition of extensibility serves as a foundation for all extensibility use cases: Extensibility refers to the adaptation of standard software by partners, customers, or ERP vendors, as well as the associated integration into system landscapes.

**【译文】** 12.1 问题陈述
以下关于可扩展性的定义是所有可扩展性用例的基础：可扩展性是指合作伙伴、客户或ERP供应商对标准软件进行的调整，以及将其集成到系统环境中的相关工作。

---

The objective is to provide additional functionality for individual or industry-specific requirements that cannot or should not be addressed by the standard software. Its primary responsibility is to empower business experts to develop simple enhancements independently.

**【译文】** 其目标是为标准软件无法解决或不应解决的个性化或特定行业需求提供附加功能。其主要职责是赋能业务专家独立开发简单的增强功能。

---

Each customer has additional use cases for enhancing the functionality of their ERP implementation. With extensibility for every specific use case, an expert or even individuals without technical expertise can create their own enhancements. These must be suitable for both cloud and on-premise ERP solutions.

**【译文】** 每个客户都有额外的用例来增强其ERP实施的功能。通过针对每个特定用例的可扩展性，专家甚至非技术人员都可以创建自己的增强功能。这些增强功能必须同时适用于云端和本地部署（On-premise）的ERP解决方案。

---

ERP systems undergo regular patching and upgrading to eliminate security vulnerabilities, fix bugs, and enhance the user experience by introducing valuable new features. As a result, innovations are also delivered through patches and upgrades.

**【译文】** ERP系统会定期进行打补丁和升级，以消除安全漏洞、修复错误，并通过引入有价值的新功能来提升用户体验。因此，创新成果也是通过补丁和升级来交付的。

---

However, providing upgrades can take a long time and may not meet specific customer needs, necessitating the constant availability of extensibility mechanisms. Customers typically expand artificial intelligence use cases to increase the accuracy of their artificial intelligence models. Several methods can be used to achieve better models, as detailed in the list of requirements:

**【译文】** 然而，提供升级可能需要很长时间，并且可能无法满足特定的客户需求，因此必须确保持续提供可扩展性机制。客户通常会扩展人工智能用例，以提高其人工智能模型的准确性。如接下来的需求列表所述，有多种方法可用于实现更好的模型：

---

