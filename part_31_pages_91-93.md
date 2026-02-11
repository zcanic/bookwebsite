# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第31部分

**原始页码**: 91 - 93
**段落数量**: 16
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 90-90 (2191 字符)
- **后文上下文页码**: 94-94 (1981 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Shipper industry' 译为 '托运人行业'，指委托运输货物的企业。2. 'Available-to-promise (ATP)' 保留缩写并译为 '可承诺量'。3. 'Slotting' 在仓储语境下译为 '货位管理' 或 '货位规划'。4. 原文中 'MRR planners' 为拼写错误，已根据上下文修正翻译为 'MRP计划员'。5. 'Cockpits' 在ERP界面语境中译为 '驾驶舱'。

---

allows for booking carriers in compliance with hazardous goods requirements. Transportation Management is applicable for domestic and international transportation in the shipper industry, as well as inbound and outbound freight management. It enables the creation and use of central master data, such as business partners and products for transportation-related processes, and the establishment of transportation networks. Freight agreements, which are contracts between business partners outlining their commitment to conduct business in a specific manner, can also be utilized.

**【译文】** [该系统]还允许根据危险品管理规定预订承运人。运输管理适用于托运人行业的国内和国际运输，以及进出口货物管理。它支持创建和使用中央主数据（如运输相关流程的业务合作伙伴和产品），以及建立运输网络。此外，系统还支持使用运费协议，这是业务合作伙伴之间概述其特定业务行为承诺的合同。

---

Internal sales representatives and order fulfillment specialists require mechanisms to configure, execute, and monitor availability checks and optimize supply distribution, which are the goals of Order Promising. This is especially crucial when the availability of materials needed to fulfill requirements is limited. As a result, the available-to-promise (ATP) check has to be supported, allowing users to determine the date and quantity a sales order requirement can be confirmed based on a specific checking rule and the current stock situation for the specified material.

**【译文】** 内部销售代表和订单履行专员需要配置、执行和监控可用性检查并优化供应分配的机制，这正是订单承诺（Order Promising）的目标。当满足需求所需的物料可用性有限时，这一点尤为关键。因此，系统必须支持可承诺量（ATP）检查，允许用户根据特定的检查规则和指定物料的当前库存情况，确定销售订单需求可以确认的日期和数量。

---

Advanced Order Promising shall ensure quick and accurate order commitments by automatically considering relevant stock in real-time while safeguarding business priorities and profitability objectives. Advanced Transportation enhances transportation efficiency by managing all inbound and outbound freight comprehensively. Advanced Warehousing optimizes orders using features such as cross-docking, workforce management, slotting, inventory optimization, transit warehousing support, and connectivity to warehouse automation equipment. Extended Service Parts Planning accurately plans service parts inventory across distribution networks based on parts volumes, velocity, and segments, strategically calculating trade-offs between costs and service.

**【译文】** 高级订单承诺应通过实时自动考虑相关库存，同时兼顾业务优先级和盈利目标，来确保快速准确的订单承诺。高级运输管理通过全面管理所有进出境货物来提高运输效率。高级仓储管理利用越库作业、劳动力管理、货位管理、库存优化、中转仓储支持以及连接仓库自动化设备等功能来优化订单处理。扩展服务备件计划根据备件数量、周转速度和细分市场，在分销网络中准确规划服务备件库存，战略性地权衡成本与服务水平。

---

4.5 Manufacturing

**【译文】** 4.5 制造

---

Fig. 4.5 Reference architecture for Manufacturing

**【译文】** 图 4.5 制造参考架构

---

manufacturing products. Work centers/resources represent machines, production lines, employees, or groups of employees. Along with BoM and routing/master recipes, work centers/resources are among the most critical master data in the production planning and control system. They are utilized for scheduling, costing, capacity planning, and simplifying operation maintenance.

**【译文】** 制造产品。工作中心/资源代表机器、生产线、员工或员工组。连同物料清单（BoM）和工艺路线/主配方，工作中心/资源是生产计划与控制系统中最关键的主数据。它们被用于排程、成本核算、产能计划以及简化操作维护。

---

The goal of Production Planning is to plan products and components to initiate internal and external procurement. Managers must take into account two factors: Material Requirements and Capacity. Companies must plan raw materials based on BoM explosion of finished product requirements. Additionally, proposals for internal and external procurement based on quantities and date requirements must be generated.

**【译文】** 生产计划的目标是对产品和组件进行规划，以启动内部和外部采购。管理者必须考虑两个因素：物料需求和产能。企业必须根据成品需求的BOM展开来规划原材料。此外，必须根据数量和日期需求生成内部和外部采购建议。

---

To plan capacity, the production planner must balance production requirements with the available capacity of respective work centers and shift calendars, which is the focus of Capacity Planning. Material requirements planning (MRP) ensures demand coverage by supply elements without considering available capacity. The capacity planning’s role is to assist MRR planners in adjusting the production plan to account for capacity constraints while maintaining demands in terms of time and quantity.

**【译文】** 为了规划产能，生产计划员必须平衡生产需求与各个工作中心的可用产能及班次日历，这正是产能计划（Capacity Planning）的重点。物料需求计划（MRP）通过供应要素确保需求覆盖，而不考虑可用产能。产能计划的作用是协助MRP计划员调整生产计划，以应对产能限制，同时在时间和数量上满足需求。

---

Production Execution is a component of Production Operations that encompasses the execution, control, monitoring, and verification of the manufacturing process using real-time data from the shop floor, contract manufacturers, and suppliers. Repetitive Manufacturing processes can be streamlined through mass processing and the simplification of financial controls in periodic actions. In this type of manufacturing, material flow can be planned and monitored with a higher level of precision. Planned orders are employed to model, plan, and initiate material flow, while product cost collectors gather the associated costs.

**【译文】** 生产执行是生产作业的一个组件，包含利用来自车间、合同制造商和供应商的实时数据对制造过程进行执行、控制、监控和验证。重复制造流程可以通过批量处理和简化周期性操作中的财务控制来精简。在此类制造模式中，物料流可以更精确地规划和监控。计划订单用于建模、规划和启动物料流，而产品成本收集器则归集相关成本。

---

Kanban inventory management allows for automatic replenishment by implementing self-regulating control circuits, such as empty bins that trigger procurement processes. Kanban is a methodology for managing production and material flow based on the physical stock of materials in production. The core concept is to maintain a consistent supply of materials needed regularly in small quantities within the production environment.

**【译文】** 看板库存管理通过实施自调节控制回路（例如触发采购流程的空料箱）来实现自动补货。看板是一种基于生产中实际物料库存来管理生产和物料流的方法。其核心理念是在生产环境中保持小批量、定期所需物料的持续供应。

---

Production Control shall offer centralized cockpits to minimize bottlenecks and reduce risks. As a result, production operators must oversee the entire shop floor production process, including handling materials, Bills of Materials (BoMs), recipes, routings, components, work centers, and resources, up to the completion of finished products. This management and regulation of the manufacturing process are typically carried out by a production supervisor responsible for assigning production tasks to individual machines and implementing measures to address machine breakdowns or component shortages.

**【译文】** 生产控制应提供集中式驾驶舱，以最大限度减少瓶颈并降低风险。因此，生产操作员必须监督整个车间生产过程，包括处理物料、物料清单（BoMs）、配方、工艺路线、组件、工作中心和资源，直至成品完工。这种对制造过程的管理和调控通常由生产主管负责，他们负责将生产任务分配给各台机器，并采取措施解决机器故障或组件短缺问题。

---

Subcontracting can be utilized to outsource production through subcontracting procurement, requiring companies to supply components to the contractor based on the BoM structure. External Processing shall allow organizations to outsource production operations to third-party providers or other production units within the company. This can be managed through external operations in routings and production orders.

**【译文】** 委外加工可通过分包采购将生产外包，要求企业根据BOM结构向承包商供应组件。外部加工允许组织将生产工序外包给第三方供应商或公司内部的其他生产单元。这可以通过工艺路线和生产订单中的外部工序进行管理。

---

Just-in-Time Processing eliminates inventory buffers by delivering components and sub-assemblies directly to the customer’s production line. With just-in-sequence, assembly is delivered in the order specified by the requested requirements. Quality Management should offer tools to inspect production processes and goods receipts, managing inspection lots and implementing usage decisions to enhance manufacturing output. Quality Management encompasses quality planning, inspection, and improvement. Quality Planning is crucial for planning the quality of products, processes, and services.

**【译文】** 准时制（Just-in-Time）处理通过将组件和子组件直接交付到客户生产线来消除库存缓冲。通过准时排序（Just-in-Sequence），装配件按需求指定的顺序交付。质量管理应提供工具来检查生产过程和收货，管理检验批并实施使用决策，以提高制造产出。质量管理包含质量策划、检验和改进。质量策划对于规划产品、过程和服务的质量至关重要。

---

Manufacturing Insights assists in analyzing manufacturing data for process enhancements, decision support, and reporting and documentation purposes. The component provides exception-based management alerts, with real-time notifications based on production bottlenecks such as time or component delays or resource constraints, which can be used to minimize shortfalls and scrap with high efficiency. Extended Production Planning and Scheduling shall improve core production planning and scheduling functionality by leveraging the visual planning board. The component automates consumption-based replenishment through demand-driven MRP and employs simulation capabilities with predictive MRP.

**【译文】** 制造洞察协助分析制造数据，用于流程改进、决策支持以及报告和文档记录。该组件提供基于异常的管理警报，根据生产瓶颈（如时间或组件延迟、资源限制）发送实时通知，可高效地最大限度减少短缺和报废。扩展生产计划与排程通过利用可视化排程板改进核心生产计划和排程功能。该组件通过需求驱动的MRP实现基于消耗的自动补货，并利用预测性MRP提供模拟能力。

---

Extended Production Engineering and Operations designs and operates production processes, bridging the gap between product engineering and manufacturing operations by transforming product design into production process design, which serves as the basis for production order management and shop floor execution.

**【译文】** 扩展生产工程与作业设计并运行生产流程，通过将产品设计转化为生产工艺设计，弥合产品工程与制造作业之间的差距，这构成了生产订单管理和车间执行的基础。

---

4.6 Sales

**【译文】** 4.6 销售

---

