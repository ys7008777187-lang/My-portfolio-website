import bpy
import math
import os

# Clear existing objects
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# Add a Torus for the core ring
bpy.ops.mesh.primitive_torus_add(major_radius=6.0, minor_radius=1.5, major_segments=64, minor_segments=16, location=(0, 0, 0))
torus = bpy.context.active_object
torus.name = "TechRing"

# Create a glowing material (Gold/Yellow)
mat = bpy.data.materials.new(name="TechGlow")
if hasattr(mat, "use_nodes"):
    mat.use_nodes = True
nodes = mat.node_tree.nodes
nodes.clear()
output = nodes.new(type='ShaderNodeOutputMaterial')
emission = nodes.new(type='ShaderNodeEmission')
# #E2B714 in linear color space roughly is (0.8, 0.45, 0.01, 1)
emission.inputs['Color'].default_value = (0.8, 0.45, 0.01, 1.0)
emission.inputs['Strength'].default_value = 5.0
links = mat.node_tree.links
links.new(emission.outputs[0], output.inputs['Surface'])
torus.data.materials.append(mat)

# Add a wireframe modifier to make it look techy
wire_mod = torus.modifiers.new(name="Wireframe", type='WIREFRAME')
wire_mod.thickness = 0.1
wire_mod.use_replace = False

# We must apply modifiers before exporting to GLTF to ensure it looks right
bpy.context.view_layer.objects.active = torus
bpy.ops.object.modifier_apply(modifier="Wireframe")

# Export to GLB
out_dir = r"D:\My portfolio website\public\models"
os.makedirs(out_dir, exist_ok=True)
out_file = os.path.join(out_dir, "tech_ring.glb")

print("Exporting GLB...")
bpy.ops.export_scene.gltf(
    filepath=out_file, 
    export_format='GLB',
    use_selection=False,
    export_apply=True,
    export_materials='EXPORT'
)
print("GLB export complete!")
