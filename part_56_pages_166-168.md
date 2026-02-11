# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第56部分

**原始页码**: 166 - 168
**段落数量**: 15
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 165-165 (2763 字符)
- **后文上下文页码**: 169-169 (1586 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Key influencers：翻译为'关键影响因子'，指在AI模型中对预测结果影响最大的特征变量。2. Side-by-side：翻译为'并行'，特指在SAP BTP等平台上与核心ERP并列运行的扩展架构。3. Inference consumption：翻译为'推理服务调用'或'使用'，指业务系统调用模型获取预测结果的过程。

---

Upon completion of a training operation within the AI technology platform, the relevant metrics, key influencers, and overall quality of the training process are supplied to the business administrator for examination and decision-making purposes.

**【译文】** 当AI技术平台内的训练操作完成后，相关的指标、关键影响因子以及训练过程的整体质量会被提供给业务管理员，用于检查和决策。

---

The business administrator has the ability to input various parameters for the training activity, as outlined in the intelligent scenario, and assess the outcomes of the trained models.

**【译文】** 业务管理员可以按照智能场景中的定义，输入训练活动的各种参数，并评估训练好的模型的结果。

---

The framework should offer a comparative perspective for the business administrator, enabling them to evaluate different training executions and determine which trained model should be utilized in the deployment process.

**【译文】** 框架应为业务管理员提供对比视角，使他们能够评估不同的训练执行情况，并决定在部署过程中应使用哪个训练模型。

---

The framework records the parameters used during a training activity to create templates for the training process. Furthermore, the framework should support regular scheduling of training jobs, notifications, and asynchronous training executions.

**【译文】** 框架会记录训练活动中使用的参数，以便为训练流程创建模板。此外，框架还应支持训练作业的定期调度、通知以及异步训练执行。

---

8.2.4 Deployment

**【译文】** 8.2.4 部署

---

In an intelligent scenario, numerous trained models and multiple deployments can coexist, but by default, only one active deployment is supported.

**【译文】** 在一个智能场景中，可以共存大量训练好的模型和多个部署，但默认情况下，只支持一个活动部署（Active Deployment）。

---

The business administrator selects a trained model for deployment based on metrics, key influencers, and the quality of the training models.

**【译文】** 业务管理员根据指标、关键影响因子和训练模型的质量，选择一个训练好的模型进行部署。

---

The framework offers the ability to test a deployment from the standpoint of the business application and determine whether to activate it for productive use.

**【译文】** 该框架提供了从业务应用程序的角度测试部署的能力，并以此决定是否将其激活以用于生产环境。

---

The activation of a deployment is a feature within the framework that enables business administrators to successfully test deployment and the corresponding inference consumption within the business context.

**【译文】** 部署的激活是框架内的一项功能，它使业务管理员能够在业务环境中成功测试部署情况以及相应的推理服务调用。

---

If the results are accurate, the business administrator can activate the deployment for consumption by all business users. This functionality within the framework allows for the integration of intelligence into the ERP business application while giving business administrators more control.

**【译文】** 如果结果准确，业务管理员可以正式激活该部署，供所有业务用户使用。框架内的这一功能允许将智能集成到ERP业务应用程序中，同时给予业务管理员更多的控制权。

---

The active model of an intelligent scenario is utilized by ERP business applications to consume the inference, as the framework conceals the complexity of active deployment from the applications.

**【译文】** ERP业务应用程序利用智能场景的活动模型来获取推理结果，而框架则对应用程序屏蔽了活动部署的复杂性。

---

Business administrators also have the option to roll back an active deployment under specific circumstances and conditions. Furthermore, the framework recommends un-deploying a trained model in instances where a trained model is nonactive and has been running for an extended period.

**【译文】** 在特定情况和条件下，业务管理员还可以选择回滚活动部署。此外，如果一个训练好的模型处于非活动状态且已经运行了很长时间，框架建议取消部署（Un-deploy）该模型。

---

8.2.5 Inferencing

**【译文】** 8.2.5 推理

---

The application of artificial intelligence takes advantage of inference values by inherently incorporating them into business procedures and user interfaces.

**【译文】** 人工智能的应用通过将推理值直接整合到业务流程和用户界面中，从而发挥其价值。

---

In the case of side-by-side artificial intelligence, the applications make use of the inference outcomes by calling upon the inference REST API, which is connected to the active deployment.

**【译文】** 在并行（Side-by-Side）人工智能架构中，应用程序通过调用连接到活动部署的推理REST API来利用推理结果。

---

