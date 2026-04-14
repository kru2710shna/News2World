import { useCallback, useMemo } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  type Node,
  type Edge,
  type NodeTypes,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import type { Entity, Relationship } from "@/data/demo-data";

const TYPE_COLORS: Record<string, string> = {
  person: "#2563EB",
  place: "#16A34A",
  event: "#D97706",
  organization: "#9333EA",
};

function EntityNode({ data }: { data: { label: string; entityType: string } }) {
  const bg = TYPE_COLORS[data.entityType] ?? "#64748B";
  return (
    <div
      className="rounded-lg border border-border bg-card px-4 py-2 text-xs font-semibold shadow-sm"
      style={{ borderLeftWidth: 4, borderLeftColor: bg }}
    >
      <Handle type="target" position={Position.Left} className="opacity-0" />
      <span className="text-foreground">{data.label}</span>
      <Handle type="source" position={Position.Right} className="opacity-0" />
    </div>
  );
}

const nodeTypes: NodeTypes = { entity: EntityNode };

interface KnowledgeGraphProps {
  entities: Entity[];
  relationships: Relationship[];
}

const KnowledgeGraph = ({ entities, relationships }: KnowledgeGraphProps) => {
  const nodes: Node[] = useMemo(() => {
    const cols = 3;
    return entities.map((e, i) => ({
      id: e.id,
      type: "entity",
      position: { x: (i % cols) * 200, y: Math.floor(i / cols) * 100 },
      data: { label: e.label, entityType: e.type },
    }));
  }, [entities]);

  const edges: Edge[] = useMemo(
    () =>
      relationships.map((r, i) => ({
        id: `e-${i}`,
        source: r.source,
        target: r.target,
        label: r.label,
        type: "default",
        style: { stroke: "hsl(221 83% 53%)", strokeWidth: 1.5 },
        labelStyle: { fontSize: 10, fill: "#64748B" },
        labelBgStyle: { fill: "#fff", fillOpacity: 0.85 },
      })),
    [relationships]
  );

  const onInit = useCallback((instance: any) => {
    setTimeout(() => instance.fitView({ padding: 0.2 }), 50);
  }, []);

  return (
    <div className="h-[500px] w-full overflow-hidden rounded-xl border border-border bg-card" style={{ boxShadow: "var(--shadow-card)" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onInit={onInit}
        fitView
        proOptions={{ hideAttribution: true }}
        minZoom={0.3}
        maxZoom={2}
      >
        <Background gap={20} size={1} color="hsl(220 13% 91%)" />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
};

export default KnowledgeGraph;
