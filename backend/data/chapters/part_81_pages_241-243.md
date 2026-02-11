# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第81部分

**原始页码**: 241 - 243
**段落数量**: 15
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 240-240 (1653 字符)
- **后文上下文页码**: 244-244 (1627 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Side-by-side Artificial Intelligence 译为'侧边人工智能'，指在SAP BTP等外部平台上运行AI，与Embedded（嵌入式）相对；2. Packing and pipelining 译为'打包和流水线'；3. Workload and quota management 译为'负载和配额管理'；4. Intelligent Scenario Lifecycle Management 译为'智能场景生命周期管理'。

---

15.2 Solution Proposal

**【译文】** 15.2 解决方案建议

---

The performance of a system can be evaluated from two angles: the technical aspect and the user’s viewpoint. The term response time is defined as the duration from the moment a user initiates an interaction to when the application is prepared for the subsequent interaction. In the realm of information technology, it is common to have response times that are less than a second, which aligns with the findings of performance perception studies carried out by, e.g., SAP’s usability teams.

**【译文】** 系统的性能可以从两个角度进行评估：技术层面和用户视角。术语“响应时间”定义为从用户发起交互到应用程序准备好进行下一次交互之间的时间长度。在信息技术领域，响应时间通常小于一秒，这与SAP可用性团队等机构进行的性能感知研究结果一致。

---

An interesting observation is that the anticipated response time fluctuates based on the perceived difficulty of a task. Similarly, user behavior changes if the expected response times are not achieved. This concept is easier to understand than it appears, and it’s worth delving into further. To begin with, users form expectations about the complexity of each of their requests. Depending on these expectations, users allocate a certain amount of time for the computer system to process their request.

**【译文】** 一个有趣的观察是，预期的响应时间会根据任务感知的难度而波动。同样，如果未达到预期的响应时间，用户行为也会发生变化。这个概念比表面上看起来更容易理解，且值得进一步深入探讨。首先，用户会对每个请求的复杂性形成预期。基于这些预期，用户会分配一定的时间供计算机系统处理其请求。

---

The time users allot for the ERP system is heavily influenced by their perception of the task’s complexity. So, how can we define the complexity of tasks? The tasks that ERP systems most commonly deal with can be broadly classified into three categories: acknowledging user input, displaying the results of a simple task, and displaying the results of a complex task.

**【译文】** 用户留给ERP系统的时间在很大程度上受其对任务复杂性感知的影响。那么，我们该如何定义任务的复杂性呢？ERP系统最常处理的任务可以大致分为三类：确认用户输入、显示简单任务的结果，以及显示复杂任务的结果。

---

An acknowledgment of user input provides the user with visual or auditory confirmation that their input has been received. For instance, consider a numeric input field: when the user shifts focus or hits the enter key after entering a value, the system verifies the syntax of the input value, and either produces an error or reformats the input value to the standard number format.

**【译文】** 确认用户输入是向用户提供视觉或听觉上的确认，表明其输入已被接收。例如，考虑一个数字输入字段：当用户输入数值后转移焦点或按下回车键时，系统会验证输入值的语法，然后要么报错，要么将输入值重新格式化为标准数字格式。

---

So, what constitutes a simple task? A simple task could be adding a new line item to a sales order or progressing to the next step in a business process wizard. On the other hand, complex tasks involve navigating to another work center or initially logging into the system. To improve the performance of an artificial intelligence application, these factors must be considered.

**【译文】** 那么，什么是简单任务？简单任务可能是在销售订单中添加一个新的行项目，或者在业务流程向导中进入下一步。另一方面，复杂任务涉及导航到另一个工作中心或首次登录系统。为了提高人工智能应用程序的性能，必须考虑这些因素。

---

As discussed in the previous section, for training artificial intelligence, it’s crucial to manage and optimize the use of memory, CPU time, and disk space. To meet this requirement, it’s necessary to implement workload and quota management.

**【译文】** 如前一节所述，对于训练人工智能而言，至关重要的是管理和优化内存、CPU时间和磁盘空间的使用。为了满足这一要求，有必要实施负载和配额管理。

---

Workload and quota management involve optimizing infrastructure resources (memory, CPU time, disk space) to maintain or improve performance or throughput. These actions can include rescheduling, moving, technically virtualizing, or limiting a specific service or workload. For instance, an administrator can set limits for jobs regarding CPU time and memory usage. From our viewpoint, successful workload and quota management requires continuous, diligent monitoring.

**【译文】** 负载和配额管理涉及优化基础设施资源（内存、CPU时间、磁盘空间），以维持或提高性能或吞吐量。这些操作可以包括重新调度、迁移、技术虚拟化或限制特定的服务或负载。例如，管理员可以对作业的CPU时间和内存使用设置限制。从我们的角度来看，成功的负载和配额管理需要持续、勤勉的监控。

---

In the context of artificial intelligence, quota management is typically not relevant for the following reasons:
• During embedded artificial intelligence training, the application data is accessed in real time from the ERP database.
• For side-by-side artificial intelligence, the application data for training is replicated from the ERP system to the AI technology platform but is usually deleted after the training run.

**【译文】** 在人工智能的背景下，配额管理通常不适用，原因如下：
• 在嵌入式人工智能训练期间，应用程序数据是从ERP数据库实时访问的。
• 对于侧边人工智能，用于训练的应用程序数据是从ERP系统复制到AI技术平台的，但通常在训练运行后会被删除。

---

However, we believe that the read access of training data should be optimized using packing and pipelining mechanisms. This means that the training data is not read all at once, which could lead to out-of-memory problems, but is processed in batches by the training process. As highlighted in the previous section, for artificial intelligence inference, the primary requirement is optimal performance in terms of response time. In addition to the well-known methods of improving API performance, we suggest caching and bulking inference results to meet this requirement.

**【译文】** 然而，我们认为应该使用打包和流水线机制来优化训练数据的读取访问。这意味着训练数据不是一次性全部读取（这可能导致内存溢出问题），而是由训练进程分批处理。正如前一节所强调的，对于人工智能推理，主要要求是在响应时间方面达到最佳性能。除了众所周知的提高API性能的方法外，我们建议对推理结果进行缓存和批量处理以满足这一要求。

---

Let’s discuss how the implementation techniques for workload and performance management vary depending on artificial intelligence approach.

**【译文】** 让我们讨论一下负载和性能管理的实施技术如何根据人工智能方法的不同而变化。

---

15.2.1 Embedded Artificial Intelligence

**【译文】** 15.2.1 嵌入式人工智能

---

Scheduling is a process that enables the automatic execution of training at predetermined times. To set up a schedule for training, one must provide patterns of recurrence, such as every Monday weekly or on the first day of each month. This allows for the precise control of when and how frequently the training should be executed. When a training schedule is set up, the system generates a scheduled instance that only includes object and schedule details, but no data.

**【译文】** 调度是一个能够在预定时间自动执行训练的过程。要设置训练计划，必须提供重复模式，例如每周一或每月的首日。这允许精确控制训练执行的时间和频率。设置训练计划后，系统会生成一个仅包含对象和计划详细信息但不包含数据的调度实例。

---

When the system executes the training, it produces models of artificial intelligence as a result. Event-based scheduling offers an extra feature that allows for the initiation of training runs. For instance, if the accuracy of a model drops below 60%, a retraining process is triggered. To prevent excessive resource usage, we suggest processing scheduled training runs as background tasks and restricting the number of concurrent background tasks. For example, the total number of tasks should not exceed five.

**【译文】** 当系统执行训练时，它会生成人工智能模型作为结果。基于事件的调度提供了一项额外功能，允许触发训练运行。例如，如果模型的准确率降至60%以下，就会触发重新训练过程。为了防止资源过度使用，我们建议将计划的训练运行作为后台任务处理，并限制并发后台任务的数量。例如，任务总数不应超过五个。

---

The scheduling process should be incorporated into the previously proposed Intelligent Scenario Lifecycle Management framework, which offers a training application.

**【译文】** 调度过程应纳入前提出的“智能场景生命周期管理”框架中，该框架提供了一个训练应用程序。

---

