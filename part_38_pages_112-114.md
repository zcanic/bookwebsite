# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第38部分

**原始页码**: 112 - 114
**段落数量**: 13
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 111-111 (3428 字符)
- **后文上下文页码**: 115-115 (3412 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Pipeline: 翻译为'管道'或'流水线'，指数据处理流程。
2. Stories (in SAP Analytics Cloud): 翻译为'故事'，这是SAP产品的特定功能术语。
3. Entities (in time series): 翻译为'实体'，指时间序列预测中的维度组合。
4. Hyperscaler object stores: 翻译为'超大规模对象存储'，指AWS、Azure等大型云服务商。
5. Productization: 翻译为'产品化'，指将实验模型转化为生产级应用的过程。
6. GitOps: 保留原文，指基于Git的运维操作模式。

---

environment has the necessary API endpoints, SAP Data Intelligence can still be utilized to pipeline the data to an external training or serving environment, like SAP AI Core, and to direct the scored data to its final destination.

**【译文】** 如果环境具备必要的 API 端点，SAP Data Intelligence 仍然可以用于将数据通过管道传输到外部训练或服务环境（如 SAP AI Core），并将评分后的数据引导至最终目的地。

---

In summary, if SAP HANA ML will be used alongside other data from outside SAP HANA that may also involve the use of R/Python or if a graphical interface is desired for SAP HANA ML, then SAP Data Intelligence is recommended. It functions as a single, easy-to-use graphical design interface for data ingestion and transformation that integrates with R, Python, APL, and PAL libraries.

**【译文】** 总之，如果 SAP HANA ML 将与 SAP HANA 外部的其他数据一起使用（这可能也涉及 R 或 Python 的使用），或者需要为 SAP HANA ML 提供图形界面，那么推荐使用 SAP Data Intelligence。它作为一个单一且易用的图形化设计界面，用于数据摄取和转换，并集成了 R、Python、APL 和 PAL 库。

---

In the preceding section, it was noted that Argo Workflows serve as the workflow execution engine for SAP AI Core. Utilizing SAP AI Core for training offers several benefits, including:
•	 Running any workload that can be executed in containers
•	 Using Kubernetes for efficient orchestration of parallel tasks
•	 Flexible resource allocation plans, encompassing GPU resources

**【译文】** 在上一节中提到，Argo Workflows 充当 SAP AI Core 的工作流执行引擎。利用 SAP AI Core 进行训练提供了诸多好处，包括：
•	 运行任何可在容器中执行的工作负载
•	 使用 Kubernetes 高效编排并行任务
•	 灵活的资源分配计划（包含 GPU 资源）

---

SAP AI Core conducts model training and pre-/post-processing workflows in batch mode. GitOps mechanisms can be employed to deliver training workflows, facilitating declarative content distribution. To develop an Argo Workflow template, any code editor (e.g., Visual Studio Code) or Argo SDKs can be used. Frameworks like Netflix’s Metaflow or Kubeflow expedite artificial intelligence scenario delivery from experimentation to production, providing enhanced support for specific artificial intelligence processes. The aim is to broaden the content package approach for more prevalent use cases, allowing a focus on transitioning experiments into production. SAP AI Core supplies content packages for common use cases, such as computer vision, and offers comprehensive GPU support for training single or multiple models. Typically, the experimentation phase occurs in the data scientist’s local environment, like JupyterLab, since SAP AI Core’s training capabilities emphasize artificial intelligence scenario productization. After determining the necessary hyperparameters, a model can be trained on SAP AI Core using a training workflow. Alternatively, a pre-trained model can be brought in and advanced to the next stage.

**【译文】** SAP AI Core 以批处理模式执行模型训练和预处理/后处理工作流。可以采用 GitOps 机制来交付训练工作流，从而促进声明式的内容分发。要开发 Argo Workflow 模板，可以使用任何代码编辑器（如 Visual Studio Code）或 Argo SDK。像 Netflix 的 Metaflow 或 Kubeflow 这样的框架，可以加速人工智能场景从实验到生产的交付，为特定的人工智能流程提供增强的支持。其目的是为了针对更普遍的用例扩展内容包方法，从而专注于将实验转化为生产应用。SAP AI Core 为常见用例（如计算机视觉）提供了内容包，并为训练单个或多个模型提供了全面的 GPU 支持。通常，实验阶段发生在数据科学家的本地环境（如 JupyterLab）中，因为 SAP AI Core 的训练能力侧重于人工智能场景的产品化。在确定了必要的超参数后，可以使用训练工作流在 SAP AI Core 上训练模型。或者，也可以引入预训练模型并推进到下一阶段。

---

A distinguishing feature is multi-tenancy, which enables serving a global artificial intelligence model while granting each tenant access to unique trainable artificial intelligence models by segregating stakeholders into tenants. This allows stakeholders to train with their own data, catering to their specific requirements. Partners can separate clients for security and regulatory compliance, while customers can divide board components to ensure governance. SAP AI Core’s integration with hyperscaler object stores, such as AWS S3, allows for incorporating customer-managed data sets in the relevant support landscapes. Another option is storing data in SAP HANA Data Lake files. SAP AI Core’s life cycle management capabilities enable the collection and storage of self-defined metrics, parameters, and training job statistics, which can be exposed via AI API to SAP AI Launchpad for monitoring. Several SAP AI Business Services utilize SAP AI Core as the AI runtime to deliver frequently needed capabilities.

**【译文】** 一个显著的特征是多租户能力，它支持在服务于全局人工智能模型的同时，通过将利益相关者隔离到不同租户中，授予每个租户访问独特的可训练人工智能模型的权限。这允许利益相关者使用自己的数据进行训练，以满足其特定需求。合作伙伴可以隔离客户以确保安全和合规，而客户可以划分不同板块组件以确保治理。SAP AI Core 与超大规模对象存储（如 AWS S3）的集成，允许在相关支持环境中纳入客户管理的数据集。另一个选项是将数据存储在 SAP HANA Data Lake 文件中。SAP AI Core 的生命周期管理功能支持收集和存储自定义指标、参数和训练任务统计信息，这些信息可以通过 AI API 暴露给 SAP AI Launchpad 进行监控。许多 SAP AI Business Services（SAP AI 业务服务）都使用 SAP AI Core 作为 AI 运行时，以交付频繁需要的功能。

---

In summary, SAP AI Core is the optimal solution for managing and operating training workflows in a scalable AI runtime when sophisticated hardware resources like GPUs or complex workflow step orchestration are necessary.

**【译文】** 总之，当需要复杂的硬件资源（如 GPU）或复杂的工作流步骤编排时，SAP AI Core 是在可扩展的 AI 运行时中管理和运行训练工作流的最佳解决方案。

---

Leveraging automated machine learning methods and an intuitive user interface, SAP Analytics Cloud enables end users to create time series forecasting models, classification models, and regression models. The predictive engine employed by SAP Analytics Cloud offers features similar to those found in SAP HANA’s Automated Predictive Library (APL). In SAP Analytics Cloud, users cannot explicitly select and parameterize the underlying algorithms, ensuring that the capabilities are accessible and comprehensible to end users. Classification and regression models can be applied to new observations, generating new datasets with predictions that can be integrated into SAP Analytics Cloud stories. Time series forecasting models have various applications and can be based on a single time series or up to a thousand combinations using entities (dimension combinations). These models can be constructed on top of datasets from SAP Analytics Cloud or models with planning capabilities. Predictive forecasts can be written back directly into planning model versions or datasets (predictive planning).

**【译文】** 利用自动化机器学习方法和直观的用户界面，SAP Analytics Cloud 使终端用户能够创建时间序列预测模型、分类模型和回归模型。SAP Analytics Cloud 采用的预测引擎提供了与 SAP HANA 自动化预测库（APL）类似的功能。在 SAP Analytics Cloud 中，用户不能显式选择和参数化底层算法，这确保了终端用户能够轻松访问和理解这些功能。分类和回归模型可以应用于新的观测数据，生成包含预测结果的新数据集，并集成到 SAP Analytics Cloud 的“故事（Stories）”中。时间序列预测模型有多种应用，可以基于单个时间序列，也可以基于使用实体（维度组合）的多达一千种组合。这些模型可以构建在 SAP Analytics Cloud 的数据集或具有规划能力的模型之上。预测结果可以直接回写到规划模型版本或数据集中（即预测性规划）。

---

In summary, SAP Analytics Cloud’s predictive scenarios offer ready-to-use forecasting capabilities through automated machine learning and user-friendly workflows designed for analytical end users. The strategic investment focus is on automated time series forecasting workflows to address planning forecasting needs.

**【译文】** 总之，SAP Analytics Cloud 的预测场景通过自动化机器学习和为分析型终端用户设计的用户友好工作流，提供了即用型的预测能力。战略投资重点在于自动化时间序列预测工作流，以解决规划预测需求。

---

Due to the fact that SAP HANA’s integrated artificial intelligence is based on industry norms, the applied algorithms deliver all the conventional metrics needed to assess the performance of the artificial intelligence model, as one would expect from any library. These metrics are typically generated by default during training, cross-validation, or score function runs and are included in the standard output. They can be directly displayed or saved for later use or comparison. As mentioned earlier, most algorithms have built-in features for automatically evaluating models and searching for parameters, along with a unique function for comparing different regression algorithm models. The APL library also includes two exclusive metrics for model performance, Predictive Power and Prediction Confidence, which are intended to provide business users with a more intuitive understanding of model performance. Of course, all generated metrics can be natively accessed through the machine learning clients for Python and R.

**【译文】** 由于 SAP HANA 的集成人工智能基于行业规范，所应用的算法提供了评估人工智能模型性能所需的所有常规指标，正如人们对任何库所期望的那样。这些指标通常在训练、交叉验证或评分函数运行期间默认生成，并包含在标准输出中。它们可以直接显示或保存以供后续使用或比较。如前所述，大多数算法都具有自动评估模型和搜索参数的内置功能，以及用于比较不同回归算法模型的独特功能。APL 库还包括两个用于模型性能的独有指标：预测能力（Predictive Power）和预测置信度（Prediction Confidence），旨在为业务用户提供对模型性能更直观的理解。当然，所有生成的指标都可以通过 Python 和 R 的机器学习客户端原生访问。

---

Model performance evaluation can be done using SAP Data Intelligence based on the metrics specified in the R or Python model during scripting/development. A wide range of metrics can be set up and collected since SAP AI Core places a significant emphasis on artificial intelligence lifecycle management. The AI Engineer has full autonomy to choose the most suitable metrics for each use case, including error rate, confusion matrix, and others. Metrics tracking is part of the AI API, allowing us to store and retrieve metrics using GET/PATCH/DELETE requests. These metrics and parameters can then be evaluated using either a third-party user interface or SAP AI Launchpad. SAP AI Core focuses on the productization of artificial intelligence use cases, so the standard evaluation phase of an experiment is not the main concern. Metrics are collected with the goal of operating and productizing artificial intelligence processes and evaluating them later.

**【译文】** 可以使用 SAP Data Intelligence 基于脚本编写/开发期间在 R 或 Python 模型中指定的指标来进行模型性能评估。由于 SAP AI Core 非常重视人工智能生命周期管理，因此可以设置和收集范围广泛的指标。AI 工程师拥有完全的自主权来为每个用例选择最合适的指标，包括错误率、混淆矩阵等。指标跟踪是 AI API 的一部分，允许我们使用 GET/PATCH/DELETE 请求来存储和检索指标。然后，可以使用第三方用户界面或 SAP AI Launchpad 来评估这些指标和参数。SAP AI Core 专注于人工智能用例的产品化，因此实验的标准评估阶段并非主要关注点。收集指标的目标是运营和产品化人工智能流程，并在之后对其进行评估。

---

SAP Analytics Cloud provides simple evaluation metrics in predictive scenarios to assess the effectiveness of predictive models (e.g., Predictive Power, Prediction Confidence, RMSE, Expected MAPE), specifically designed for business users. Additionally, stories make it easy to evaluate models on the fly. SAP Analytics Cloud’s analytical and visualization capabilities simplify the comparison of predictions and results.

**【译文】** SAP Analytics Cloud 在预测场景中提供简单的评估指标，以评估预测模型的有效性（例如：预测能力、预测置信度、均方根误差 [RMSE]、预期平均绝对百分比误差 [Expected MAPE]），这些指标是专为业务用户设计的。此外，“故事”功能使得能够轻松地动态评估模型。SAP Analytics Cloud 的分析和可视化功能简化了预测与结果的比较。

---

In summary, while SAP HANA provides a standard toolkit for model evaluation and some automated features for assistance, building complex models still necessitates proper data science expertise. SAP AI Core, with its strong focus on life cycle management, can collect various metrics, especially when integrated with the AI API. APIs enable programmatic interaction to retrieve metrics tracked by SAP AI Core. For those who prefer a user interface for tracking metrics, SAP AI Launchpad is available. SAP Analytics Cloud offers both business user-centric model evaluation and ad hoc model evaluation using stories.

**【译文】** 总之，虽然 SAP HANA 为模型评估提供了标准工具包和一些自动化辅助功能，但构建复杂模型仍然需要适当的数据科学专业知识。SAP AI Core 非常注重生命周期管理，可以收集各种指标，特别是与 AI API 集成时。API 支持通过编程交互来检索 SAP AI Core 跟踪的指标。对于那些更喜欢使用用户界面来跟踪指标的人来说，可以使用 SAP AI Launchpad。SAP Analytics Cloud 通过“故事”提供了以业务用户为中心的模型评估和即席（ad hoc）模型评估。

---

The implementation of SAP HANA artificial intelligence scenarios primarily focuses on objects capable of holding SQL code, as SQL and SQLScript function as native interfaces to the embedded artificial intelligence in SAP HANA. This can be as straightforward as SQLScript files prepared for manual execution. Ideally, the script should be stored in central objects that can be automated for productive use, such as SAP HANA stored procedures that run automatically or on-demand. Database Table Functions may also include calls to artificial intelligence libraries and can be incorporated into Calculation Views to create virtual data models like real-time predictions each time a Calculation View is queried. SAP Business Technology Platform Fiori and Cloud Application Programming (CAP) applications support embedding their respective SQLScript objects within SAP HANA native artifacts. Consequently, any process or workflow based on these applications can leverage all deployment techniques of these tools and incorporate artificial intelligence capabilities. Numerous options are available when using machine

**【译文】** SAP HANA 人工智能场景的实施主要集中在能够容纳 SQL 代码的对象上，因为 SQL 和 SQLScript 是 SAP HANA 嵌入式人工智能的原生接口。这可以简单到准备用于手动执行的 SQLScript 文件。理想情况下，脚本应存储在可自动化用于生产用途的中心对象中，例如自动运行或按需运行的 SAP HANA 存储过程。数据库表函数（Database Table Functions）也可以包含对人工智能库的调用，并可并入计算视图（Calculation Views）中，以创建虚拟数据模型，例如每次查询计算视图时的实时预测。SAP 业务技术云平台（BTP）Fiori 和云应用编程（CAP）应用程序支持将其各自的 SQLScript 对象嵌入 SAP HANA 原生工件中。因此，基于这些应用程序的任何流程或工作流都可以利用这些工具的所有部署技术，并纳入人工智能能力。当使用针对 Python 和 R 的机器学习客户端时，有多种选项可供选择...

---

