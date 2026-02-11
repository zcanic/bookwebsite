# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第82部分

**原始页码**: 244 - 246
**段落数量**: 26
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 243-243 (1335 字符)
- **后文上下文页码**: 247-247 (3363 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Side-by-Side: 译为“并行”，对应 ERP 语境下的 Side-by-Side Extensibility（并行扩展）。
2. Workload class: 译为“工作负载类”，HANA 数据库标准术语。
3. Pod/Chart: Kubernetes 和 Helm 的专用术语，保留英文或使用业界通用中文惯例。

---

Fig. 15.3  Workload classes for embedded artificial intelligence
and mapping technology. The aim of workload class and mapping is to prevent the 
overuse of system resources like CPU time and memory by applying predefined 
mapping rules. This process generally involves the following steps:

**【译文】** 图 15.3 嵌入式人工智能的工作负载类和映射技术。工作负载类和映射的目标是通过应用预定义的映射规则，防止系统资源（如 CPU 时间和内存）被过度使用。这一过程通常包含以下步骤：

---

1.	 The administrator sets up a workload class, which outlines the quantity of sys­tem resources that a group of applications can use, and a workload mapping, 
which details how to align an application workload with a workload class.

**【译文】** 1.	 管理员设置“工作负载类”，概述一组应用程序可使用的系统资源量；同时设置“工作负载映射”，详述如何将应用程序的工作负载与工作负载类进行对应。

---

2.	 When an application sends a request to the session layer of the ERP’s database 
system, the relevant workload class is identified based on the session context 
information, such as the application name, application username, and database 
username.

**【译文】** 2.	 当应用程序向 ERP 数据库系统的会话层发送请求时，系统会根据会话上下文信息（如应用程序名称、应用程序用户名和数据库用户名）识别出相关的工作负载类。

---

3.	 Once the relevant workload class has been identified, the application request can 
have its resources managed according to the definition of the workload class.

**【译文】** 3.	 一旦识别出相关的工作负载类，应用程序请求的资源就可以根据该工作负载类的定义进行管理。

---

The workload class should support at least three types of resource properties for 
regulation:
•	 Statement thread limit: This represents the highest number of parallel threads 
that can execute a statement.
•	 Statement memory limit: This represents the maximum memory allocation per 
statement.
•	 Statement priority: This represents the priority level for a statement to be exe­cuted in the job execution framework.

**【译文】** 工作负载类应至少支持以下三种资源属性以进行调控：
•	 语句线程限制（Statement thread limit）：代表执行一条语句可使用的最大并行线程数。
•	 语句内存限制（Statement memory limit）：代表每条语句的最大内存分配量。
•	 语句优先级（Statement priority）：代表语句在作业执行框架中被执行的优先级。

---

15.2.2	  Side-by-Side Artificial Intelligence
The workload management looks different for side-by-side artificial intelligence 
using AI technology platform as it offers enhanced scalability features. Scalability 
is the degree to which a business process, component, or system can increase or 
decrease in size, volume, or the number of users it serves while still functioning 
correctly and predictably.

**【译文】** 15.2.2	 并行（Side-by-Side）人工智能
对于使用 AI 技术平台的并行人工智能，工作负载管理有所不同，因为它提供了增强的可扩展性功能。可扩展性（Scalability）是指业务流程、组件或系统在保持正确和可预测运行的同时，增加或减少其规模、容量或服务用户数量的程度。

---

Essentially, scalability is about how a software applica­tion’s resource usage changes predictably under varying system loads, such as an 
increase in multiuser or parallel load, while maintaining a reasonable response time.

**【译文】** 本质上，可扩展性是指软件应用程序的资源使用情况如何在不同的系统负载（如多用户负载或并行负载增加）下发生可预测的变化，同时保持合理的响应时间。

---

The AI technology platform typically offers a scalable infrastructure for inference 
and training, built on Kubernetes technology. We suggest utilizing this technology 
for workload management and performance of artificial intelligence scenarios.

**【译文】** AI 技术平台通常基于 Kubernetes 技术，为推理和训练提供可扩展的基础设施。我们建议利用该技术进行人工智能场景的工作负载管理和性能优化。

---

Kubernetes automates the processes of deploying, scaling, maintaining, scheduling, 
and operating multiple application containers across clusters of nodes. Containers 
operate on a shared operating system on host machines but are isolated from each 
other unless a user decides to connect them.

**【译文】** Kubernetes 自动化了跨节点集群部署、扩展、维护、调度和运行多个应用程序容器（Container）的过程。容器在宿主机的共享操作系统上运行，但彼此隔离，除非用户决定连接它们。

---

Kubernetes can be used with container 
runtimes and the container runtime interface. It includes tools for orchestration, 
secrets management, service discovery, scaling, and load balancing.

**【译文】** Kubernetes 可与容器运行时（Container Runtimes）和容器运行时接口配合使用。它包含用于编排、密钥管理、服务发现、扩展和负载均衡的工具。

---

Kubernetes 
technology also includes automatic bin packing to optimally allocate resources for 
containers, and it applies configurations through configuration management fea­tures. It safeguards container workloads by implementing or reversing changes and 
provides availability and quality checks for containers.

**【译文】** Kubernetes 技术还包括自动装箱（Bin packing）功能，以优化分配容器资源，并通过配置管理功能应用配置。它通过实施或回滚更改来保护容器工作负载，并为容器提供可用性和质量检查。

---

In Kubernetes, containers 
operate in pods, which are the basic scheduling unit for Kubernetes and add an 
abstraction layer to containers. Pods consist of one or more containers located on a 
host machine, and they can share resources.

**【译文】** 在 Kubernetes 中，容器在 Pod 中运行，Pod 是 Kubernetes 的基本调度单元，为容器增加了一个抽象层。Pod 由位于宿主机上的一个或多个容器组成，它们可以共享资源。

---

Kubernetes identifies a machine with 
sufficient free compute capacity for a specific pod and launches the associated con­tainers. To prevent conflicts, each pod is assigned a unique IP address, allowing 
applications to use ports.

**【译文】** Kubernetes 会识别具有足够空闲计算能力来运行特定 Pod 的机器，并启动相关容器。为防止冲突，每个 Pod 分配一个唯一的 IP 地址，允许应用程序使用端口。

---

A node agent, known as a kubelet, manages the pods, their 
containers, and their images. A node, also referred to as a minion, is a worker 
machine in Kubernetes. It can be a physical machine or a virtual machine.

**【译文】** 节点代理（称为 kubelet）负责管理 Pod、其容器及其镜像。节点（Node，过去也称为 Minion）是 Kubernetes 中的工作机器，它可以是物理机或虚拟机。

---

Nodes 
contain the necessary services to run pods and receive management instructions 
from master components. Services found on nodes include Docker, kube-proxy, and 
kubelet.

**【译文】** 节点包含运行 Pod 所需的服务，并从主组件接收管理指令。节点上的服务包括 Docker、kube-proxy 和 kubelet。

---

Tenant namespaces and content are respectively deployed and deleted as 
Helm releases. A release is an instance of a chart running in a Kubernetes cluster. 
One chart can often be installed many times in the same cluster.

**【译文】** 租户命名空间和内容分别作为 Helm 发布（Release）进行部署和删除。发布是运行在 Kubernetes 集群中的 Chart 实例。一个 Chart 通常可以在同一个集群中安装多次。

---

The Helm tool 
installs charts into Kubernetes, creating a new release for each installation. The ten­ant ID and related configuration are also easily injected by Helm.

**【译文】** Helm 工具将 Chart 安装到 Kubernetes 中，为每次安装创建一个新的发布。租户 ID 和相关配置也可以通过 Helm 轻松注入。

---

With the correct 
template logic, such as feature flags or a cloud provider, differences are managed. 
Upgrading tenants with new releases is also supported. Templating is also provided 
for creating Kubernetes job specifications. Additionally, the mounting of tenant data 
and access to GPUs are enabled.

**【译文】** 通过正确的模板逻辑（例如功能标记或云提供商配置），可以管理环境差异。系统也支持使用新发布来升级租户，并提供用于创建 Kubernetes 作业规范的模板。此外，还支持租户数据的挂载和 GPU 的访问。

---

Fig. 15.4  Performance improvement for inference calls
In addition, we recommend that within the ERP system, the outcomes of infer­ences 
are stored by utilizing batch processing, thereby making these results readily acces­sible for local use.

**【译文】** 图 15.4 推理调用的性能提升
此外，我们建议在 ERP 系统内，利用批处理存储推理（Inference）结果，从而使这些结果便于本地直接使用。

---

We also put forward the idea that specific types of side-by-side 
trained models should be imported into the ERP system and consumed locally. This 
approach would significantly enhance the speed of inference calls, given that local 
application programming interfaces (APIs) are typically 10 to 100 times faster than 
their remote counterparts.

**【译文】** 我们还提出，特定类型的并行训练模型应导入 ERP 系统并在本地使用。这种方法将显著提高推理调用的速度，因为本地应用程序编程接口（API）通常比远程 API 快 10 到 100 倍。

---

A technology that aids in the export and import of models 
is the Open Neural Network Exchange (ONNX). For both deep learning models and 
traditional models of machine-based intelligence, ONNX provides an open-source 
format.

**【译文】** 开放神经网络交换（ONNX）是一种有助于模型导出和导入的技术。对于深度学习模型和传统的机器智能模型，ONNX 提供了一种开源格式。

---

It also establishes built-in operators and common data types, along with a 
computation graph model that can be expanded. There are a multitude of hardware, 
software, and frameworks that support ONNX.

**【译文】** 它还建立了内置运算符和通用数据类型，以及可扩展的计算图模型。目前有多种硬件、软件和框架支持 ONNX。

---

The transition from research to pro­duction can be made more efficient and compatible across different frameworks, 
thereby fostering innovation in the field of machine-based intelligence.

**【译文】** 这使得从研究到生产的过渡可以在不同框架之间变得更加高效和兼容，从而促进机器智能领域的创新。

---

15.2.3	  Performance-Optimized Programming
From our viewpoint, the primary factor in optimizing the performance of an ERP 
system lies in the programming. Various implementation methods can be discov­ered under the term Performance-Optimized Programming.

**【译文】** 15.2.3	 性能优化编程
在我们看来，优化 ERP 系统性能的主要因素在于编程。在“性能优化编程”这一术语下，包含多种实现方法。

---

In relation to network 
and data, the following KPIs can be defined:
•	 Count of network roundtrips for each user interaction step: The duration of a 
roundtrip is contingent on the number of network hops, essentially the count of 
intermediary devices that data must traverse from source to destination, and 
latency, which is the time it takes for a packet to be sent from the source and 
received at the destination.

**【译文】** 关于网络和数据，可以定义以下关键绩效指标（KPI）：
•	 每个用户交互步骤的网络往返次数：往返的持续时间取决于网络跳数（即数据从源到目的地必须经过的中间设备的数量）和延迟（即数据包从源发送到目的地接收所需的时间）。

---

When data is transmitted over wide area networks 
(WAN) or global area networks (GAN), latency makes up the majority of the

**【译文】** 当数据通过广域网（WAN）或全球局域网（GAN）传输时，延迟占据了往返时间的大部分。

---

