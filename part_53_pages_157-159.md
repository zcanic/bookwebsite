# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第53部分

**原始页码**: 157 - 159
**段落数量**: 13
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 156-156 (1857 字符)
- **后文上下文页码**: 160-160 (877 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Side-by-side' 翻译为 '并行'，这是SAP/ERP领域中指代基于云平台扩展核心ERP功能的标准术语模式。 2. 'Provisioning' 翻译为 '开通' 或 '资源调配'，指系统资源的初始化过程。 3. 'Breakout scenarios' 翻译为 '突破式场景'，指超出标准配置工具能力、需要编写自定义代码的扩展场景。 4. 'Artifacts' 翻译为 '工件'，指软件开发和生命周期管理中的对象（如模型、代码包等）。

---

8 Life Cycle Management
In this chapter, we specify the business requirements and propose the solution concept for life cycle management. In the context of artificial intelligence, new artifacts and processes are introduced that must be considered from the life cycle management perspective. For example, artificial intelligence models must be trained, deployed, activated, and monitored. Those aspects are not covered by classic life cycle management tools and concepts. ERP systems have a very complex life cycle as they are long-lasting, rich in functionality, and available in different deployments (e.g., on-premise and in the cloud). Artificial intelligence artifacts must be seamlessly integrated in the overall ERP life cycle management.

**【译文】** 第8章 生命周期管理
在本章中，我们将明确业务需求，并提出生命周期管理的解决方案概念。在人工智能的语境下，引入了必须从生命周期管理角度加以考虑的新工件（artifacts）和流程。例如，人工智能模型必须经过训练、部署、激活和监控。这些方面并未被传统的生命周期管理工具和概念所涵盖。ERP系统的生命周期非常复杂，因为它们经久耐用、功能丰富，并提供不同的部署方式（如本地部署和云端部署）。人工智能工件必须无缝集成到整体的ERP生命周期管理中。

---

8.1 Problem Statement
In the realm of artificial intelligence, novel elements must be taken into account in life cycle management to deliver the operational qualities that customers anticipate from an intelligent ERP system. This section concentrates on the stage where a customer investigates an artificial intelligence scenario within the ERP system to comprehend its value, prerequisites, and the necessary infrastructure for its utilization. We outline the requirements in relation to the steps customers need to undertake to use and manage artificial intelligence scenarios: check, setup, train, deploy, and monitor. The emphasis lies on the artificial intelligence specific aspects, while existing solution approaches for life cycle management, such as delivery or support processes, are assumed. Let’s examine these steps and the role of artificial intelligence in each of them:

**【译文】** 8.1 问题陈述
在人工智能领域，生命周期管理必须考虑新的要素，以交付客户对智能ERP系统所期望的运营质量。本节重点关注客户在ERP系统中研究人工智能场景的阶段，旨在理解其价值、前提条件以及使用所需的必要基础设施。我们将针对客户使用和管理人工智能场景所需采取的步骤（即检查、设置、训练、部署和监控）来概述相关需求。重点在于人工智能特有的方面，而现有的生命周期管理解决方案（如交付或支持流程）则假定已经具备。让我们以此审视这些步骤以及人工智能在其中的角色：

---

• Check
Customers often find it challenging to determine the technical and business prerequisites needed to train and utilize artificial intelligence scenarios. For instance, an adequate data volume is essential for training artificial intelligence algorithms, and underlying business processes must be activated and configured to establish a meaningful basis for the training process. As the number of artificial intelligence scenarios grows, manual evaluations become impractical due to high total cost of ownership (TCO) and immense complexity. Consequently, an automatic prerequisite check capability is necessary to validate whether the required prerequisites for training and consumption are met for each artificial intelligence scenario.

**【译文】** • 检查
客户通常发现很难确定训练和使用人工智能场景所需的技术和业务前提条件。例如，充足的数据量对于训练人工智能算法至关重要，且底层的业务流程必须已激活并配置妥当，才能为训练过程建立有意义的基础。随着人工智能场景数量的增加，由于高昂的总拥有成本（TCO）和巨大的复杂性，人工评估变得不再切合实际。因此，必须具备自动化的前提条件检查能力，以验证每个人工智能场景是否满足训练和使用所需的先决条件。

---

• Setup
Before customers can begin using side-by-side artificial intelligence scenarios, connectivity to the AI technology platform must be established. During this onboarding process, a customer account with service entitlement and a service key is generated. The service key’s content provides the information for the initial communication configuration on the ERP platform side to access the artificial intelligence services in the AI technology platform. This operation model is manual, labor-intensive, and challenging for customers to manage. As a result, the setup process should be automated using a wizard that guides customers through the steps of provisioning and connecting the AI technology platform.

**【译文】** • 设置
在客户开始使用并行（side-by-side）人工智能场景之前，必须建立与AI技术平台的连接。在这个入驻（onboarding）过程中，会生成一个包含服务权益和服务密钥的客户账户。服务密钥的内容提供了ERP平台侧进行初始通信配置所需的信息，以便访问AI技术平台中的人工智能服务。这种运营模式是手动的、劳动密集型的，且对客户来说管理难度大。因此，设置过程应使用向导（wizard）实现自动化，引导客户完成AI技术平台的资源开通和连接步骤。

---

• Train
Customers need to train artificial intelligence models for consumption. However, the training process is typically manual, time-consuming, and less transparent to customers. Moreover, the calculated model accuracy KPIs are not adequate for usage decisions. Thus, the training process should be offered as a self-service option for the customer for all artificial intelligence scenarios. Customers must be empowered to adjust parameters to enable successful training. Errors and warnings should be communicated in a language that non-AI experts can comprehend. Fully automated training runs based on scheduled jobs should be supported, and event-driven triggering of training jobs should be possible.

**【译文】** • 训练
客户需要训练人工智能模型以供使用。然而，训练过程通常是手动的、耗时的，且对客户来说缺乏透明度。此外，计算出的模型准确率KPI不足以作为使用决策的依据。因此，应对所有人工智能场景为客户提供自助式的训练过程。必须赋予客户调整参数的能力，以实现成功的训练。错误和警告应以非AI专家也能理解的语言进行传达。应支持基于计划任务的全自动训练运行，并应支持由事件驱动触发的训练任务。

---

• Deploy
Customers need control over the timing of deployment and activation of trained models. However, models are usually deployed in the DevOps mode, which is costly and time-consuming due to manual steps. Automating this process is beneficial, allowing customers to deploy the model as a self-service option. Simultaneous deployment of multiple models should be supported for purposes such as A/B testing before model activation. Deactivation of models should also be possible, like un-deploying models with insufficient accuracy. The history of model activation/deactivation should be documented for monitoring and auditing purposes.

**【译文】** • 部署
客户需要控制已训练模型的部署和激活时机。然而，模型通常在DevOps模式下部署，由于涉及人工步骤，既昂贵又耗时。自动化此过程是有益的，允许客户以自助服务的方式部署模型。应支持同时部署多个模型，以便在模型激活前进行A/B测试等目的。模型的停用也应成为可能，例如取消部署（un-deploying）准确率不足的模型。为了监控和审计目的，应记录模型激活/停用的历史。

---

• Monitor
Customers want to assess the quality of productively used models at runtime. However, artificial intelligence infrastructure often only provides technical monitoring, lacking business process aspects. Monitoring should offer customers a comprehensive view of the artificial intelligence models in use, based on a central cockpit for all artificial intelligence scenarios. This should include, for example, model status, accuracy KPIs, the state of inference calls, and the volume of processed data. In case of issues, alerts should be raised to inform administrators to take action. Solution proposals should be recommended to administrators for resolving problems. Statistics should be provided, such as the number of errors, the amount of resource consumption, or the costs incurred.

**【译文】** • 监控
客户希望在运行时评估生产环境中使用的模型质量。然而，人工智能基础设施通常只提供技术监控，缺乏业务流程层面的视角。监控应基于针对所有人工智能场景的统一控制台（central cockpit），为客户提供正在使用的人工智能模型的全面视图。这应包括例如模型状态、准确率KPI、推理调用的状态以及处理的数据量。如果出现问题，应发出警报以通知管理员采取行动。应向管理员推荐解决问题的方案建议。应提供统计数据，例如错误数量、资源消耗量或产生的成本。

---

In this context, it is essential to differentiate between various roles:

**【译文】** 在此背景下，必须区分不同的角色：

---

• Business Users
These users concentrate on managing business operations and utilize artificial intelligence features within this context, such as on user interfaces. For instance, they may modify chart layouts, date formats, or conceal table columns. These alterations are local and do not impact others. Such modifications are not exclusive to artificial intelligence and can be considered as granted.

**【译文】** • 业务用户
这些用户专注于管理业务运营，并在此背景下（例如在用户界面上）使用人工智能功能。例如，他们可能会修改图表布局、日期格式或隐藏表格列。这些更改是本地的，不会影响其他人。此类修改并非人工智能独有，可视为理所当然的功能。

---

• Business Experts
These specialized key users possess extensive business and technical expertise. They handle the majority of configuration and extensibility tasks, including enhancing data sources for model training, replacing algorithms, and expanding pipelines. However, they typically require assistance from data scientists who conduct artificial intelligence explorations as a preliminary step. The changes they make affect individuals in specific business areas and the entire organization.

**【译文】** • 业务专家
这些专业化的关键用户拥有广泛的业务和技术专业知识。他们处理大部分配置和扩展任务，包括增强模型训练的数据源、替换算法和扩展管道（pipelines）。然而，他们通常需要数据科学家的协助，由数据科学家先行进行人工智能探索。他们所做的更改会影响特定业务领域的人员以及整个组织。

---

• Business Administrators
These technical users oversee the administration of artificial intelligence applications, including training, deployment, and monitoring of artificial intelligence models. They specifically configure models and schedule training jobs for artificial intelligence scenarios. They collaborate with data scientists and implement their recommendations. The changes they make affect individuals in specific business areas and the entire organization.

**【译文】** • 业务管理员
这些技术用户负责人工智能应用程序的管理，包括人工智能模型的训练、部署和监控。他们专门为人工智能场景配置模型并安排训练任务。他们与数据科学家合作并实施其建议。他们所做的更改会影响特定业务领域的人员以及整个组织。

---

• Developers
These technical specialists execute complex changes by writing code. They manage breakout scenarios where artificial intelligence logic (e.g., transformations, preprocessing) cannot be graphically modeled and must be coded due to high complexity. Developers are responsible for extending coded artificial intelligence logic, with data scientists providing recommendations based on their artificial intelligence explorations. They also integrate artificial intelligence features into user interfaces and business processes. The changes they make affect individuals in specific business areas and the entire organization.

**【译文】** • 开发人员
这些技术专家通过编写代码来执行复杂的更改。他们管理那些由于高度复杂性而无法进行图形化建模、必须通过代码实现的“突破式”场景（breakout scenarios，例如转换、预处理）。开发人员负责扩展编码的人工智能逻辑，并由数据科学家根据其人工智能探索提供建议。他们还将人工智能功能集成到用户界面和业务流程中。他们所做的更改会影响特定业务领域的人员以及整个组织。

---

8.2 Solution Proposal
In this section, we delve into the technical execution of the business requirements outlined in the previous section. To provide the necessary background, we will first address the subsequent inquiries:

**【译文】** 8.2 解决方案建议
在本节中，我们将深入探讨上一节中概述的业务需求的技术执行。为了提供必要的背景知识，我们将首先解决随后的疑问：

---

