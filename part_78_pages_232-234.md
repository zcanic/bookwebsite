# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第78部分

**原始页码**: 232 - 234
**段落数量**: 15
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 231-231 (792 字符)
- **后文上下文页码**: 235-235 (63 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Intrinsic' 译为 '内在'，'Post hoc' 译为 '事后'，这是机器学习可解释性（Explainable AI）领域的通用术语。 2. 'End-of-period closing' 译为 '期末结账'，符合ERP财务模块的专业语境。 3. 第一段开头结合了前文上下文补全了语义。

---

of the artificial intelligence feature. The credibility of an explanation is contingent on its life cycle. We distinguish between two scenarios based on the lifespan of the explanation:

**【译文】** 不可信的结果会侵蚀用户的信任，并阻碍人工智能功能的采用。解释的可信度取决于其生命周期。根据解释的存续时间，我们区分了以下两种场景：

---

• Static explanations are appropriate for offline learning where the system does not change the approximation of the target function once the initial training phase is finished. We presume that the requirement for a repeated explanation of the model may reduce or even vanish over time as the user becomes more familiar with the system. Once the user comprehends the main principle of the underlying service (algorithm), it should be considered to omit explanations at the model level. Moreover, the explanation should always be presented again if the artificial intelligence model is changed or updated. This is applicable to explanations that are hard-coded or manually maintained.

**【译文】** • **静态解释**适用于离线学习（offline learning），即一旦初始训练阶段完成，系统就不再改变对目标函数的拟合。我们假设随着用户对系统越来越熟悉，对模型重复解释的需求可能会减少甚至消失。一旦用户理解了底层服务（算法）的主要原理，应考虑省略模型层面的解释。此外，如果人工智能模型发生变更或更新，则必须再次展示解释。这适用于那些硬编码或手动维护的解释。

---

• Dynamic explanations are necessary for online learning services powered by artificial intelligence where data is sequentially made available and is used to update the model at each step. This kind of explanation is produced every time the artificial intelligence model has learned and adjusted its model. In most instances, it’s not required to completely change the appearance and content of the explanations. However, if a service powered by artificial intelligence discovers new rules for processing items in the system, this newly gained knowledge must be reflected in its explanations. We should adapt the primary artificial intelligence explanation to mirror newly implemented processing principles and alter the list of decision criteria whenever objectives are modified.

**【译文】** • **动态解释**对于基于人工智能的在线学习（online learning）服务是必要的，在这类服务中，数据是陆续获取的，并用于在每一步更新模型。每当人工智能模型进行了学习并调整了模型时，就会生成这种解释。在大多数情况下，不需要完全改变解释的外观和内容。然而，如果人工智能服务发现了处理系统内项目的新规则，这种新获得的知识必须反映在其解释中。我们应当调整主要的人工智能解释以反映新实施的处理原则，并在目标修改时更改决策标准列表。

---

Before we commence with the design of the artificial intelligence application, we should conduct research to determine the answers to the following questions:

**【译文】** 在开始设计人工智能应用之前，我们应该进行调研以确定以下问题的答案：

---

• Is the user anticipating an explanation? When the potential risks linked to a task are relatively minor and the outcomes can be effortlessly rolled back, users typically don’t seek an explanation for the system’s suggestion.

**【译文】** • **用户是否期待解释？** 当与任务相关的潜在风险相对较小，且结果可以轻松回滚时，用户通常不会寻求针对系统建议的解释。

---

• What degree of automation are we striving for? The level of automation can significantly alter the use case, the roles of the target users, and the application’s capabilities.

**【译文】** • **我们追求的自动化程度是多少？** 自动化水平会显著改变用例、目标用户的角色以及应用的能力。

---

• Besides the intended business user, what other roles participate in the experience? The interaction with artificial intelligence systems also includes technical roles that are not business-related. We should also take into account roles that contribute to development, support, or maintenance.

**【译文】** • **除了预期的业务用户，还有哪些角色参与体验？** 与人工智能系统的交互也包括非业务相关的技术角色。我们还应考虑到那些负责开发、支持或维护的角色。

---

• How transparent or trackable does the artificial intelligence service needs to be? Some use cases are more sensitive than others. Enterprise applications, for instance, often face stricter auditing requirements due to legal and regulatory mandates, compared to consumer software.

**【译文】** • **人工智能服务需要多高的透明度或可追踪性？** 某些用例比其他用例更敏感。例如，与消费者软件相比，由于法律和监管的强制规定，企业级应用通常面临更严格的审计要求。

---

• Can users generally comprehend the displayed information and data, and can they deduce the subsequent actions and their effects? While artificial intelligence can aid in enhancing even the simplest tasks, it may be overengineered to offer artificial intelligence explanations when the user already comprehends the outcomes and their implications.

**【译文】** • **用户通常能理解显示的信息和数据，并推断出后续行动及其影响吗？** 虽然人工智能甚至可以帮助增强最简单的任务，但如果用户已经理解了结果及其含义，再提供人工智能解释可能就属于过度设计（overengineering）了。

---

• What is the potential damage to the customer’s business if data is processed incorrectly? Some tasks in processes are inherently critical and can lead to severe consequences. Artificial intelligence explanations must protect against such scenarios and assist in preventing any harm or disruption.

**【译文】** • **如果数据处理不正确，对客户业务的潜在损害是什么？** 流程中的某些任务本质上是关键性的，可能导致严重后果。人工智能解释必须防范此类场景，并协助防止任何损害或中断。

---

• How simple or complex is it to undo changes made to the system or process? In situations where the user is up against deadlines, end-of-period closing, or other tasks that must be successful on the first attempt, providing supportive information to the user is vital. However, explanations may not be necessary if it’s feasible to instantly reverse everything in the event of a failure.

**【译文】** • **撤销对系统或流程所做的更改有多简单或复杂？** 在用户面临截止日期、期末结账或其他必须一次成功的任务时，向用户提供支持性信息至关重要。然而，如果在失败发生时可以立即逆转一切，那么解释可能就不必要了。

---

Does the business case necessitate constant adaptation? We presume that as the user becomes more experienced, the need for a repeated (static) explanation of the model may decrease or even vanish. However, if the algorithm powered by artificial intelligence learns dynamically, users must always be kept informed of changing conditions (dynamic explanations).

**【译文】** 业务场景是否需要不断的适应？我们假设随着用户经验的丰富，对模型进行重复（静态）解释的需求可能会减少甚至消失。但是，如果由人工智能驱动的算法是动态学习的，则必须始终让用户知晓不断变化的条件（动态解释）。

---

14.2.2 Backend Processes

**【译文】** 14.2.2 后端流程

---

The concept of explainability can be realized by either limiting the intricacy of the artificial intelligence model, which is an intrinsic approach, or by implementing techniques that scrutinize the model after its training phase, known as the post hoc method. Intrinsic interpretability is associated with artificial intelligence models that are deemed explainable due to their uncomplicated structure, such as concise decision trees or sparse linear models. It’s worth noting that there are established explanation methods for artificial intelligence algorithms that are widely recognized within the data scientist community, but these are not the primary focus of this discussion. In the context of business applications, it’s crucial to select methods that elucidate both the individual prediction and the overall behavior of the model.

**【译文】** 可解释性的概念可以通过两种方式实现：一是限制人工智能模型的复杂性，这是一种**内在（intrinsic）**方法；二是实施在训练阶段结束后审查模型的技术，即所谓的**“事后”（post hoc）**方法。内在可解释性通常与那些因结构简单而被认为可解释的人工智能模型相关，例如简洁的决策树或稀疏线性模型。值得注意的是，在数据科学家社区中，有一些广泛认可的成熟人工智能算法解释方法，但这些不是本次讨论的重点。在商业应用的背景下，至关重要的是选择既能阐明单个预测又能阐明模型整体行为的方法。

---

14.5
The explanations that are both global and local in nature often take the form of statistical metrics. These metrics need to be converted into the specific language of the end user’s domain. The explanation component aids in this process technically through its ability to map these metrics accordingly. This presents a significant challenge for those designing the user interface.

**【译文】** 14.5
兼具全局和局部性质的解释通常采取统计指标的形式。这些指标需要被转换为最终用户领域的特定语言。解释组件通过其相应的指标映射能力，在技术层面辅助这一过程。这对用户界面的设计者来说是一个重大挑战。

---

