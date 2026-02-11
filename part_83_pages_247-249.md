# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第83部分

**原始页码**: 247 - 249
**段落数量**: 37
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 246-246 (2056 字符)
- **后文上下文页码**: 250-250 (3016 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Roundtrip' 译为 '往返' 或 '网络往返'，指数据包去回一次的过程。 2. 'Primary/Replica' 译为 '主节点/副本节点'，这是数据库领域的通用术语。 3. 'Multi-temperature storage' 译为 '多温度存储'，指根据数据热度（访问频率）分级存储的策略。 4. 'Code-pushdown' 译为 '代码下推'，这是 SAP HANA 等现代 ERP 数据库技术中的核心概念，指将计算逻辑下沉到数据库层执行。 5. 'Data to Code' 与 'Code to Data' 分别译为 '数据迁就代码' 和 '代码迁就数据'，形象地表达了数据移动方向的改变。 6. 'Side-by-side' 译为 '并行式'，指与 ERP 核心系统并列运行的扩展应用模式。

---

roundtrip time. Ultimately, our deduction is straightforward: The greater the number of roundtrips, the poorer the application response time.

**【译文】** （承接上文关于网络延迟的讨论）往返时间。归根结底，我们的结论很直接：网络往返次数越多，应用程序的响应时间就越慢。

---

• Amount of data transferred for each user interaction step: This essentially measures the data moved between the user interface frontend and the application server. We deduce that the less data transported over a network, the quicker the transfer is completed and the sooner the user can engage in the next interaction with the user interface.

**【译文】** • 每个用户交互步骤的数据传输量：这主要衡量用户界面前端与应用服务器之间传输的数据。我们的结论是，通过网络传输的数据越少，传输完成得就越快，用户就能越早与用户界面进行下一次交互。

---

As a result, the following design principles are established for the development of applications involving artificial intelligence:

**【译文】** 因此，针对涉及人工智能的应用程序开发，确立了以下设计原则：

---

• An application involving artificial intelligence initiates a minimal count of sequential round trips and only transfers necessary data to the frontend. The conclusion is clear: the more roundtrips, the greater the effect on network performance and the poorer the application’s end-to-end response time.

**【译文】** • 涉及人工智能的应用程序应发起最少数量的连续网络往返，且仅向前端传输必要的数据。结论很明确：往返次数越多，对网络性能的影响越大，应用程序的端到端响应时间就越差。

---

• An application involving artificial intelligence transfers no more than 10 KB to 20 KB of data for each user interaction step.

**【译文】** • 涉及人工智能的应用程序在每个用户交互步骤中传输的数据量不应超过 10 KB 到 20 KB。

---

• Key strategies to enhance network performance include compression and frontend caching, both of which should be incorporated as part of applications involving artificial intelligence.

**【译文】** • 提升网络性能的关键策略包括压缩和前端缓存，这两者都应作为涉及人工智能的应用程序的一部分纳入考量。

---

In our view, another critical aspect of performance-optimized programming is the database. Frequently, poor performance of applications involving artificial intelligence is due to databases, which are the bottleneck that needs to be expanded.

**【译文】** 在我们看来，性能优化编程的另一个关键方面是数据库。涉及人工智能的应用程序性能不佳，往往归咎于数据库，因为它是需要扩容的瓶颈所在。

---

To address this issue, other factors must be taken into account in addition to the choice of database technology. An initial step, for instance, is the creation of replicas. A replica is a duplicate of a database or document that is updated regularly and thus kept synchronized.

**【译文】** 为解决这一问题，除了选择数据库技术外，还必须考虑其他因素。例如，第一步是创建副本（Replicas）。副本是数据库或文档的复本，它会被定期更新以保持同步。

---

There is a database for all write operations, also known as primary. All these actions are then transferred to the replicas. This benefits availability because if a primary node fails, a replica simply becomes the new primary node.

**【译文】** 通常有一个用于所有写入操作的数据库，也称为主节点（Primary）。所有这些操作随后会被传输到副本节点。这有利于提高可用性，因为如果主节点发生故障，副本节点可以直接成为新的主节点。

---

Additionally, it has the advantage that read queries, which constitute the majority in an ERP system, can be executed on all nodes, whether they are primary or replica. This distribution of the load results in significant performance improvements.

**【译文】** 此外，它还有一个优势，即在企业资源规划（ERP）系统中占绝大多数的读取查询可以在所有节点（无论是主节点还是副本节点）上执行。这种负载分配能带来显著的性能提升。

---

Another step is multi-temperature storage. Here, different storage technologies are used based on the type of data. For instance, data that is frequently used is stored on especially fast cache memories so that it can be processed and sent within a very short time.

**【译文】** 另一步是多温度存储（Multi-temperature storage）。这里根据数据类型使用不同的存储技术。例如，频繁使用的数据存储在极快的缓存内存中，以便能在极短时间内处理和发送。

---

Since this type of memory is very costly, not all information can be stored on it. For this reason, other types of storage are used, and decisions are made, for example, based on the criticality and access frequency of the data as to where it is stored.

**【译文】** 由于这种内存非常昂贵，并非所有信息都能存储在其中。因此，会使用其他类型的存储，并根据数据的重要性及访问频率等因素，决定其存储位置。

---

Performance-optimized programming must take into account a crucial aspect: the system footprint, with a particular focus on the memory footprint. One way to minimize this is by transferring application data from the cache to less expensive, less powerful memory options.

**【译文】** 性能优化编程必须考虑到一个关键方面：系统占用空间（System Footprint），特别是内存占用。最小化占用空间的一种方法是将应用程序数据从缓存转移到更便宜、性能较低的存储器上。

---

Distributing data efficiently across databases and tables can also help decrease the footprint of applications that utilize artificial intelligence. The management of old data is of primary importance. In an ERP system, data accumulates significantly over time.

**【译文】** 在数据库和表之间高效地分配数据，也有助于减少利用人工智能的应用程序的占用空间。旧数据的管理至关重要。在ERP系统中，数据随时间推移会大量积累。

---

Ideally, a system should be able to scale massively without requiring additional intervention. However, this can lead to substantial costs, which may not be justified by the resulting value.

**【译文】** 理想情况下，系统应能够在大规模扩展的同时无需额外干预。然而，这可能导致巨大的成本，而其产生的价值可能无法弥补这些成本。

---

It’s important to differentiate between various types and states of data. Data can vary in age and undergoes a life cycle. Each stage of this life cycle impacts the data’s relevance and availability differently.

**【译文】** 区分不同类型和状态的数据非常重要。数据的账龄各不相同，并经历一个生命周期。生命周期的每个阶段对数据的相关性和可用性有不同的影响。

---

For instance, data in the Legal Hold section is typically accessed less frequently. Therefore, it doesn’t need to be stored in high-performance cache memory. Instead, it can be archived in a compressed format on durable, affordable, and slightly slower memory, as access speed isn’t a crucial performance indicator for this data.

**【译文】** 例如，处于“法律保留（Legal Hold）”阶段的数据通常访问频率较低。因此，它不需要存储在高性能缓存内存中。相反，它可以以压缩格式归档在持久、廉价且稍慢的存储器上，因为访问速度对这类数据来说不是关键的性能指标。

---

Other performance indicators and measures can be developed for other life cycle stages to enhance storage efficiency, indirectly reducing costs and improving performance, thereby minimizing a system’s footprint.

**【译文】** 针对生命周期的其他阶段，也可以制定相应的性能指标和措施，以提高存储效率，间接降低成本并提升性能，从而最小化系统的占用空间。

---

Lastly, we suggest the use of code-pushdown for performance-optimized programming. Data processing requires transfer between the application server and the ERP system’s database via a network. This transfer is considerably slower than the internal server transfer between the main memory and various caches.

**【译文】** 最后，我们建议在性能优化编程中使用“代码下推（Code-pushdown）”技术。数据处理需要通过网络在应用服务器和ERP系统数据库之间进行传输。这种传输比主内存和各种缓存之间的内部服务器传输要慢得多。

---

The difference is even more extreme when hard disk accesses or other mechanical steps are involved. To mitigate the network connection’s bottleneck effect, the programming paradigm of code-pushdown can be used.

**【译文】** 当涉及硬盘访问或其他机械步骤时，差异甚至更加极端。为了缓解网络连接的瓶颈效应，可以使用代码下推的编程范式。

---

Traditionally, the database is accessed for data needed for processing and calculations. This data is then sent to the application server for processing, a principle known as data to code. However, this requires the data request to be sent to the database first, and then the entire data set must be transferred from the database to the application server via a network.

**【译文】** 传统上，系统访问数据库以获取处理和计算所需的数据。这些数据随后被发送到应用服务器进行处理，这一原则被称为“数据迁就代码（Data to Code）”。然而，这要求先向数据库发送数据请求，然后必须通过网络将整个数据集从数据库传输到应用服务器。

---

To conserve bandwidth and enhance performance, this principle has been inverted. Following the code to data motto, calculations are performed locally within the database management system. This shifts some of the workload to the database server.

**【译文】** 为了节省带宽并提高性能，这一原则被反转了。遵循“代码迁就数据（Code to Data）”的格言，计算在数据库管理系统内部本地执行。这将部分工作负载转移到了数据库服务器上。

---

Consequently, performance-intensive logic, such as the training of artificial intelligence algorithms, can be executed almost entirely on the database rather than on the application server.

**【译文】** 因此，性能密集型逻辑（例如人工智能算法的训练）几乎可以完全在数据库上执行，而不是在应用服务器上执行。

---

15.3 Conclusion

**【译文】** 15.3 结论

---

Depending on the underlying algorithms, training of artificial intelligence models can have high requirements for hardware. Inference calls must have very short response times. Thus, measures must be put in place to resolve those challenges.

**【译文】** 取决于底层算法，人工智能模型的训练可能对硬件有很高的要求。推理调用必须具有非常短的响应时间。因此，必须采取措施来解决这些挑战。

---

In this section, we deducted the business requirements and proposed the necessary technical implementation for workload management and performance in the context of artificial intelligence.

**【译文】** 在本节中，我们推导了业务需求，并提出了在人工智能背景下进行工作负载管理和性能优化所需的技术实现。

---

High performance is required for inference calls as typically end users consuming the results on the user interface and expect fast response time. Training jobs are usually asynchronous and can take long time without being an issue.

**【译文】** 推理调用需要高性能，因为通常最终用户在用户界面上使用结果，并期望快速的响应时间。训练任务通常是异步的，即使耗时较长也不会成为问题。

---

However, workload management must be established for training jobs as they absorb too many hardware resources from which the ERP business processes otherwise would suffer. We proposed solutions for embedded and side-by-side artificial intelligence and suggested techniques for performance-optimized programming.

**【译文】** 然而，必须为训练任务建立工作负载管理，因为它们会占用过多的硬件资源，若不管理，ERP业务流程将会受到影响。我们提出了针对嵌入式和并行式（Side-by-side）人工智能的解决方案，并建议了性能优化编程的技术。

---

16 Legal Auditing

**【译文】** 16 法律审计（Legal Auditing）

---

In this chapter, we specify the business requirements and propose the solution concept for legal auditing. Artificial intelligence training and inference processes must be traceable. For this, proper logging is necessary.

**【译文】** 在本章中，我们将详细说明业务需求并提出法律审计的解决方案概念。人工智能的训练和推理过程必须是可追溯的。为此，适当的日志记录是必要的。

---

These logs are also the basis of auditing of artificial intelligence, which is a legal obligation. Thus, artificial intelligence applications must be integrated into the auditing infrastructure of ERP systems and facilitate auditors performing all their tasks including generating audit reports.

**【译文】** 这些日志也是人工智能审计的基础，这是一项法律义务。因此，人工智能应用程序必须集成到ERP系统的审计基础设施中，并协助审计员执行其所有任务，包括生成审计报告。

---

In particular, we determine the artifacts that should be in the scope of legal auditing. Furthermore, we also define the necessary tasks and processes regarding legal auditing in context of ERP software infusing artificial intelligence.

**【译文】** 特别是，我们要确定应纳入法律审计范围的工件（Artifacts）。此外，我们还定义了在ERP软件融入人工智能背景下，与法律审计相关的必要任务和流程。

---

16.1 Problem Statement

**【译文】** 16.1 问题陈述

---

Logging in the context of ERP systems refers to the process of recording activities, events, or operations that occur within the system. This can include user actions, system errors, data modifications, access times, and other significant events. Here are some key points about logging in ERP systems:

**【译文】** ERP系统背景下的日志记录是指记录系统内发生的活动、事件或操作的过程。这包括用户操作、系统错误、数据修改、访问时间和其他重大事件。以下是关于ERP系统中日志记录的一些关键点：

---

1. Audit trail: Logging provides an audit trail that can be used to trace and review actions. This is particularly important in ERP systems, which often handle sensitive business data. If something goes wrong, logs can help identify what happened and who was involved.

**【译文】** 1. 审计跟踪（Audit trail）：日志记录提供了可用于追踪和审查操作的审计跟踪。这在处理敏感业务数据的ERP系统中尤为重要。如果出现问题，日志可以帮助确定发生了什么以及涉及谁。

---

2. Security: Logs can be used to detect unauthorized access or other security incidents. For example, if an account is logging in at unusual times or performing unexpected actions, this could be a sign of a security breach.

**【译文】** 2. 安全性：日志可用于检测未经授权的访问或其他安全事件。例如，如果一个账户在异常时间登录或执行非预期操作，这可能是安全漏洞的迹象。

---

3. Performance monitoring: Logs can also be used to monitor the performance of the ERP system. For example, if certain operations are taking longer than expected, this could be a sign of a performance issue that needs to be addressed.

**【译文】** 3. 性能监控：日志还可用于监控ERP系统的性能。例如，如果某些操作耗时超过预期，这可能是性能问题的迹象，需要解决。

---

