# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第80部分

**原始页码**: 238 - 240
**段落数量**: 8
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 237-237 (1469 字符)
- **后文上下文页码**: 241-241 (3388 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Sizing' 翻译为'容量规划'，在IT基础设施语境中指确定硬件规格的过程，比'定径'更符合中文习惯。 2. 'Side-by-side' 保留了英文对照并译为'并行'，指AI平台与ERP系统并列运行的架构模式。 3. 'Transactional processes' 统一译为'事务性流程'，这是ERP领域的标准术语。

---

15 Workload Management and Performance
In this chapter, we specify the business requirements and propose the solution concept for workload management and performance. Depending on the underlying algorithms, training of artificial intelligence models can have high requirements for hardware. Inference calls must have very short response times. Thus, measures must be put in place to resolve those challenges. Especially, consumption of computing resources for artificial intelligence must not slow down the transactional processes in ERP systems as they are critical of running the enterprise. Consequently, in additional to the already proposed solution architecture, which scales from embedded to side-by-side artificial intelligence approach, we suggest further performance optimization techniques.

**【译文】** 第15章 负载管理与性能

本章我们将明确负载管理和性能方面的业务需求，并提出相应的解决方案概念。根据底层算法的不同，人工智能模型的训练可能对硬件有很高的要求。推理调用必须具有极短的响应时间。因此，必须采取措施来应对这些挑战。特别是，人工智能对计算资源的消耗绝不能拖慢ERP系统中的事务性流程，因为这些流程对企业的运营至关重要。因此，除了已经提出的涵盖从嵌入式到并行（side-by-side）人工智能方法的解决方案架构外，我们还建议采取进一步的性能优化技术。

---

15.1 Problem Statement
The reliability of processes infused with artificial intelligence outlined in a company’s ERP system is of utmost importance. As we move further into the digital age, an increasing number of processes are being digitized or semi-digitized and incorporated into ERP systems from a variety of vendors. To maintain consistent service quality, companies must depend on the availability and performance of artificial intelligence based processes. This need extends to the IT systems that execute and manage these processes. The primary goal of ERP systems, in addition to offering necessary functionalities, should be to ensure that systems of any size can complete tasks within a reasonable timeframe. Whether a company is transitioning from an older ERP system or constructing their first ERP system from scratch, it’s crucial to plan the hardware optimally. This planning encompasses everything from storage and computing power to other considerations like hosting and tariff options. The term “sizing” is used to encapsulate the answers to these questions. Insufficient resources typically result in poor system performance. Conversely, an overly large system can be a financial drain and contribute to environmental pollution through increased power usage, without providing any additional value to the company or society.

**【译文】** 15.1 问题陈述

在公司的ERP系统中，融合了人工智能的流程的可靠性至关重要。随着我们深入数字时代，越来越多的流程正在被数字化或半数字化，并整合到来自各种供应商的ERP系统中。为了保持一致的服务质量，公司必须依赖基于人工智能的流程的可用性和性能。这种需求也延伸到了执行和管理这些流程的IT系统。ERP系统的主要目标，除了提供必要的功能外，还应确保任何规模的系统都能在合理的时间内完成任务。无论是从旧的ERP系统转型，还是从头构建第一个ERP系统，优化规划硬件都至关重要。这种规划涵盖了从存储和计算能力到托管和资费选项等各种考量。业界通常使用术语“容量规划（Sizing）”来概括对这些问题的回答。资源不足通常会导致系统性能低下。相反，过大的系统则会造成财务负担，并通过增加电力消耗造成环境污染，而不能为公司或社会提供任何额外的价值。

---

The term clean-up refers to various activities associated with the life cycle of data and storage media. This includes routine tasks like defragmenting file systems and deleting temporary data, which are designed to maintain IT system performance. It also includes archiving unnecessary data. Another significant consideration is the network. The use of cloud systems or other distributed systems not operated within an intranet increases the amount of data that must be transported through public local area network (LAN) or wide area network (WAN) lines from the server to the user. As public Internet lines are not under the control of individual software service providers, no optimizations can be made in this area. However, there are methods to reduce a system’s network traffic, such as avoiding the transmission of unnecessary data or separating historical and current data, which is typically needed more frequently. Finally, the hardware used is also a significant factor. It’s reasonable to expect that a system’s performance requirements will change over time. Given the high cost of computing power, it’s in a company’s best interest to keep hardware costs as low as possible and minimize resource waste. Therefore, it’s crucial to design an ERP system that can dynamically manage changing loads and allow for scaling measures, including the addition and removal of hardware components like CPUs or RAM.

**【译文】** 术语“清理（clean-up）”是指与数据和存储介质生命周期相关的各种活动。这包括旨在维持IT系统性能的常规任务，如文件系统碎片整理和删除临时数据，也包括归档不必要的数据。另一个重要的考虑因素是网络。使用云系统或其他不在内网运行的分布式系统，会增加必须通过公共局域网（LAN）或广域网（WAN）线路从服务器传输到用户的数据量。由于公共互联网线路不受个别软件服务提供商的控制，因此无法在该领域进行优化。然而，有一些方法可以减少系统的网络流量，例如避免传输不必要的数据，或将历史数据与通常更频繁需要的当前数据分离开来。最后，所使用的硬件也是一个重要因素。有理由预期系统的性能需求会随着时间的推移而变化。鉴于计算能力的高昂成本，将硬件成本保持在尽可能低的水平并最大限度地减少资源浪费，符合公司的最佳利益。因此，设计一个能够动态管理不断变化的负载并允许扩展措施（包括添加和移除CPU或RAM等硬件组件）的ERP系统至关重要。

---

Within the context of artificial intelligence, the process of training a model necessitates supplying the algorithm with training data from which it can glean knowledge. This training data must include the correct response, often referred to as a target or target attribute. The learning algorithm identifies patterns within the training data that link the input data attributes to the target and subsequently produces an artificial intelligence model that encapsulates these patterns. The training of artificial intelligence is an asynchronous process typically carried out on a yearly, monthly, or weekly basis. As such, performance isn’t the primary concern, but the allocation of memory, CPU time, and disk space is. Here, performance is defined as the overall efficiency of a system, encompassing throughput, individual response time, and availability.

**【译文】** 在人工智能的语境下，训练模型的过程需要为算法提供训练数据，以便从中获取知识。这些训练数据必须包含正确的响应，通常称为“目标（target）”或“目标属性”。学习算法识别训练数据中将输入数据属性与目标联系起来的模式，随后生成封装了这些模式的人工智能模型。人工智能的训练是一个异步过程，通常按年、月或周进行。因此，性能不是首要关注点，内存、CPU时间和磁盘空间的分配才是重点。在这里，性能被定义为系统的整体效率，包括吞吐量、单次响应时间和可用性。

---

Inference, on the other hand, is the procedure of using the artificial intelligence model to generate predictions on fresh data where the target is unknown. For instance, consider an artificial intelligence model that has been trained to determine whether an email is spam or not. In this scenario, the AI technology platform would be supplied with training data comprising emails for which the target is known (i.e., a label indicating whether an email is spam or not). The AI technology platform would then train an artificial intelligence model using this data, resulting in a model that strives to predict whether incoming emails will be spam or not. For inference calls on top of the trained model, typically, fast response time, respectively, high performance is required. Usually, inference is based on synchronous calls by end user who are expecting prompt results.

**【译文】** 另一方面，推理是使用人工智能模型对目标未知的新数据生成预测的过程。例如，考虑一个经过训练用于确定电子邮件是否为垃圾邮件的人工智能模型。在这种情况下，会向AI技术平台提供包含已知目标（即指示电子邮件是否为垃圾邮件的标签）的电子邮件训练数据。然后，AI技术平台将使用这些数据训练人工智能模型，从而产生一个致力于预测传入电子邮件是否为垃圾邮件的模型。对于基于训练模型的推理调用，通常需要快速的响应时间，也就是高性能。通常，推理是基于最终用户的同步调用，他们期望立即获得结果。

---

implications. However, as depicted in Figure 15.1, these implications are contingent on the artificial intelligence infrastructure used, the necessary artificial intelligence algorithms, and the underlying programming model.

**【译文】** 这带来了相应的影响。然而，如图15.1所示，这些影响取决于所使用的人工智能基础设施、必要的人工智能算法以及底层的编程模型。

---

As previously discussed, scenarios that require algorithms with minimal memory and CPU time are implemented directly into the ERP platform, while more demanding algorithms such as deep learning are delegated to the AI technology platform. However, it’s important to note that even embedded artificial intelligence can potentially cause a slowdown in ERP business processes. Therefore, the following considerations must be taken into account:
• The total response time for utilizing an artificial intelligence model should not exceed 1 second. This is because artificial intelligence functionalities are incorporated into large-scale transactional processes and user interfaces.
• The process of training artificial intelligence should not negatively affect the performance of transactional operations due to improper allocation of memory, CPU time, and disk space.

**【译文】** 如前所述，需要内存和CPU时间极少的算法场景直接在ERP平台中实施，而深度学习等要求更高的算法则委托给AI技术平台。然而，需要注意的是，即使是嵌入式人工智能也可能导致ERP业务流程变慢。因此，必须考虑以下因素：
• 使用人工智能模型的总响应时间不应超过1秒。这是因为人工智能功能被整合到了大规模的事务流程和用户界面中。
• 人工智能的训练过程不应因内存、CPU时间和磁盘空间的不当分配而对事务性操作的性能产生负面影响。

---

When it comes to side-by-side artificial intelligence, the training of the model takes place on the AI technology platform. This platform is both scalable and distributed, so it’s not expected to have any adverse effects. However, when it comes to using the model, the associated key performance indicator (KPI) must be taken into account, especially since large-scale transactional processes on the ERP side are involved.

**【译文】** 对于并行（side-by-side）人工智能，模型的训练在AI技术平台上进行。该平台既可扩展又是分布式的，因此预计不会产生任何不利影响。然而，在使用模型时，必须考虑相关的关键绩效指标（KPI），特别是因为这涉及ERP侧的大规模事务性流程。

---

