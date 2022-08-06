
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const wallPlainGlass = new Entity('wallPlainGlass')
engine.addEntity(wallPlainGlass)
wallPlainGlass.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(15, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.999999523162842, 1, 1.0000001192092896)
})
wallPlainGlass.addComponentOrReplace(transform4)
const gltfShape2 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
wallPlainGlass.addComponentOrReplace(gltfShape2)

const doorframeBlack = new Entity('doorframeBlack')
engine.addEntity(doorframeBlack)
doorframeBlack.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(9, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
doorframeBlack.addComponentOrReplace(transform5)
const gltfShape3 = new GLTFShape("fb7c3a1e-aaf1-4bb1-baa1-0e0f57ed9b3f/BlackDoorframe.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
doorframeBlack.addComponentOrReplace(gltfShape3)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
wallPlainGlass2.addComponentOrReplace(gltfShape2)
const transform6 = new Transform({
  position: new Vector3(7, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.999999523162842, 1, 1.0000001192092896)
})
wallPlainGlass2.addComponentOrReplace(transform6)

const wallPlainNavy = new Entity('wallPlainNavy')
engine.addEntity(wallPlainNavy)
wallPlainNavy.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(15, 0, 29),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.000017166137695, 1, 1.0000011920928955)
})
wallPlainNavy.addComponentOrReplace(transform7)
const gltfShape4 = new GLTFShape("d6efa3e9-8b73-4ca4-ab7c-c04c8d335cf0/PlainNavyWall.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
wallPlainNavy.addComponentOrReplace(gltfShape4)

const wallPlainNavy2 = new Entity('wallPlainNavy2')
engine.addEntity(wallPlainNavy2)
wallPlainNavy2.setParent(_scene)
wallPlainNavy2.addComponentOrReplace(gltfShape4)
const transform8 = new Transform({
  position: new Vector3(1, 0, 29),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.000020980834961, 1, 1.0000014305114746)
})
wallPlainNavy2.addComponentOrReplace(transform8)

const wallPlainWhite = new Entity('wallPlainWhite')
engine.addEntity(wallPlainWhite)
wallPlainWhite.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(15, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7, 1, 1)
})
wallPlainWhite.addComponentOrReplace(transform9)
const gltfShape5 = new GLTFShape("45eb9e1a-2eca-4b6f-a5c4-b0278dc7e635/PlainWhiteWall.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
wallPlainWhite.addComponentOrReplace(gltfShape5)

const wallPlainNavy3 = new Entity('wallPlainNavy3')
engine.addEntity(wallPlainNavy3)
wallPlainNavy3.setParent(_scene)
wallPlainNavy3.addComponentOrReplace(gltfShape4)
const transform10 = new Transform({
  position: new Vector3(1, 4, 29),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.000024795532227, 1, 1.0000016689300537)
})
wallPlainNavy3.addComponentOrReplace(transform10)

const wallPlainNavy4 = new Entity('wallPlainNavy4')
engine.addEntity(wallPlainNavy4)
wallPlainNavy4.setParent(_scene)
wallPlainNavy4.addComponentOrReplace(gltfShape4)
const transform11 = new Transform({
  position: new Vector3(15, 4, 29),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.000028610229492, 1, 1.0000019073486328)
})
wallPlainNavy4.addComponentOrReplace(transform11)

const wallPlainWhite2 = new Entity('wallPlainWhite2')
engine.addEntity(wallPlainWhite2)
wallPlainWhite2.setParent(_scene)
wallPlainWhite2.addComponentOrReplace(gltfShape5)
const transform12 = new Transform({
  position: new Vector3(15, 4, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7, 1, 1)
})
wallPlainWhite2.addComponentOrReplace(transform12)

const wallPlainGlass4 = new Entity('wallPlainGlass4')
engine.addEntity(wallPlainGlass4)
wallPlainGlass4.setParent(_scene)
wallPlainGlass4.addComponentOrReplace(gltfShape2)
const transform13 = new Transform({
  position: new Vector3(15, 4, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.8849968910217285, 1, 0.9999998807907104)
})
wallPlainGlass4.addComponentOrReplace(transform13)

const doorframeBlack2 = new Entity('doorframeBlack2')
engine.addEntity(doorframeBlack2)
doorframeBlack2.setParent(_scene)
doorframeBlack2.addComponentOrReplace(gltfShape3)
const transform14 = new Transform({
  position: new Vector3(3, 8, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
doorframeBlack2.addComponentOrReplace(transform14)

const wallPlainNavy5 = new Entity('wallPlainNavy5')
engine.addEntity(wallPlainNavy5)
wallPlainNavy5.setParent(_scene)
wallPlainNavy5.addComponentOrReplace(gltfShape4)
const transform15 = new Transform({
  position: new Vector3(15, 8, 29),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.000020980834961, 1, 1.0000014305114746)
})
wallPlainNavy5.addComponentOrReplace(transform15)

const wallPlainNavy6 = new Entity('wallPlainNavy6')
engine.addEntity(wallPlainNavy6)
wallPlainNavy6.setParent(_scene)
wallPlainNavy6.addComponentOrReplace(gltfShape4)
const transform16 = new Transform({
  position: new Vector3(15, 12, 29),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.000032424926758, 1, 1.000002145767212)
})
wallPlainNavy6.addComponentOrReplace(transform16)

const wallPlainNavy7 = new Entity('wallPlainNavy7')
engine.addEntity(wallPlainNavy7)
wallPlainNavy7.setParent(_scene)
wallPlainNavy7.addComponentOrReplace(gltfShape4)
const transform17 = new Transform({
  position: new Vector3(1, 12, 29),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.00004768371582, 1, 1.0000030994415283)
})
wallPlainNavy7.addComponentOrReplace(transform17)

const wallPlainNavy8 = new Entity('wallPlainNavy8')
engine.addEntity(wallPlainNavy8)
wallPlainNavy8.setParent(_scene)
wallPlainNavy8.addComponentOrReplace(gltfShape4)
const transform18 = new Transform({
  position: new Vector3(1, 8, 29),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(14.000036239624023, 1, 1.000002384185791)
})
wallPlainNavy8.addComponentOrReplace(transform18)

const wallPlainWhite3 = new Entity('wallPlainWhite3')
engine.addEntity(wallPlainWhite3)
wallPlainWhite3.setParent(_scene)
wallPlainWhite3.addComponentOrReplace(gltfShape5)
const transform19 = new Transform({
  position: new Vector3(15, 12, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7, 1, 1)
})
wallPlainWhite3.addComponentOrReplace(transform19)

const wallPlainWhite4 = new Entity('wallPlainWhite4')
engine.addEntity(wallPlainWhite4)
wallPlainWhite4.setParent(_scene)
wallPlainWhite4.addComponentOrReplace(gltfShape5)
const transform20 = new Transform({
  position: new Vector3(15, 8, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7, 1, 1)
})
wallPlainWhite4.addComponentOrReplace(transform20)

const wallPlainGlass5 = new Entity('wallPlainGlass5')
engine.addEntity(wallPlainGlass5)
wallPlainGlass5.setParent(_scene)
wallPlainGlass5.addComponentOrReplace(gltfShape2)
const transform21 = new Transform({
  position: new Vector3(15, 8, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.041581153869629, 1, 0.9999995827674866)
})
wallPlainGlass5.addComponentOrReplace(transform21)

const stairsFloating = new Entity('stairsFloating')
engine.addEntity(stairsFloating)
stairsFloating.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(13, 0, 21),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
stairsFloating.addComponentOrReplace(transform22)
const gltfShape6 = new GLTFShape("896b942f-3c65-4d53-b8ff-8d874270fe6e/floatingStairs.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
stairsFloating.addComponentOrReplace(gltfShape6)

const wallPlainGlass3 = new Entity('wallPlainGlass3')
engine.addEntity(wallPlainGlass3)
wallPlainGlass3.setParent(_scene)
wallPlainGlass3.addComponentOrReplace(gltfShape2)
const transform23 = new Transform({
  position: new Vector3(15, 4, 29),
  rotation: new Quaternion(-0.7071070075035095, -1.0536687966578029e-8, 9.483043328373242e-8, 0.7071065902709961),
  scale: new Vector3(2.294999122619629, 1.0000004768371582, 1.0000009536743164)
})
wallPlainGlass3.addComponentOrReplace(transform23)

const stairsFloating2 = new Entity('stairsFloating2')
engine.addEntity(stairsFloating2)
stairsFloating2.setParent(_scene)
stairsFloating2.addComponentOrReplace(gltfShape6)
const transform24 = new Transform({
  position: new Vector3(12.5, 4, 25),
  rotation: new Quaternion(0, 0, 0, -1),
  scale: new Vector3(1, 1, 1)
})
stairsFloating2.addComponentOrReplace(transform24)

const wallPlainGlass7 = new Entity('wallPlainGlass7')
engine.addEntity(wallPlainGlass7)
wallPlainGlass7.setParent(_scene)
wallPlainGlass7.addComponentOrReplace(gltfShape2)
const transform25 = new Transform({
  position: new Vector3(15, 8, 31.5),
  rotation: new Quaternion(-0.7071070075035095, -1.0536687966578029e-8, 9.483043328373242e-8, 0.7071065902709961),
  scale: new Vector3(6.8849968910217285, 1.6875003576278687, 1.0000009536743164)
})
wallPlainGlass7.addComponentOrReplace(transform25)

const wallPlainGlass8 = new Entity('wallPlainGlass8')
engine.addEntity(wallPlainGlass8)
wallPlainGlass8.setParent(_scene)
wallPlainGlass8.addComponentOrReplace(gltfShape2)
const transform26 = new Transform({
  position: new Vector3(10.5, 8, 25),
  rotation: new Quaternion(-0.7071070075035095, -1.0536687966578029e-8, 9.483043328373242e-8, 0.7071065902709961),
  scale: new Vector3(3.8728089332580566, 2.5, 1.0000009536743164)
})
wallPlainGlass8.addComponentOrReplace(transform26)

const wallPlainGlass9 = new Entity('wallPlainGlass9')
engine.addEntity(wallPlainGlass9)
wallPlainGlass9.setParent(_scene)
wallPlainGlass9.addComponentOrReplace(gltfShape2)
const transform27 = new Transform({
  position: new Vector3(5, 8, 26),
  rotation: new Quaternion(-0.7071070075035095, -1.0536687966578029e-8, 9.483043328373242e-8, 0.7071065902709961),
  scale: new Vector3(1.9364043474197388, 3.749999523162842, 1.0000009536743164)
})
wallPlainGlass9.addComponentOrReplace(transform27)

const wallPlainGlass10 = new Entity('wallPlainGlass10')
engine.addEntity(wallPlainGlass10)
wallPlainGlass10.setParent(_scene)
wallPlainGlass10.addComponentOrReplace(gltfShape2)
const transform28 = new Transform({
  position: new Vector3(15, 8, 21),
  rotation: new Quaternion(-0.7071070075035095, -1.0536687966578029e-8, 9.483043328373242e-8, 0.7071065902709961),
  scale: new Vector3(5.886669158935547, 2.4999961853027344, 1.0000009536743164)
})
wallPlainGlass10.addComponentOrReplace(transform28)

const woodPlanksFloorModulesXM = new Entity('woodPlanksFloorModulesXM')
engine.addEntity(woodPlanksFloorModulesXM)
woodPlanksFloorModulesXM.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(15, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 1, 2.25)
})
woodPlanksFloorModulesXM.addComponentOrReplace(transform29)
const gltfShape7 = new GLTFShape("06d68dea-ab97-48e1-b35a-a77b504aa45c/Wood Planks Floor Modules 4x4M.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
woodPlanksFloorModulesXM.addComponentOrReplace(gltfShape7)

const drumms = new Entity('drumms')
engine.addEntity(drumms)
drumms.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(8, 0, 2.5),
  rotation: new Quaternion(-5.725695813334946e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
drumms.addComponentOrReplace(transform30)
const gltfShape8 = new GLTFShape("b6dd0d14-e5bb-444b-9a2e-2c25d3dce874/Drumms.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
drumms.addComponentOrReplace(gltfShape8)

const drummChair = new Entity('drummChair')
engine.addEntity(drummChair)
drummChair.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(8, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
drummChair.addComponentOrReplace(transform31)
const gltfShape9 = new GLTFShape("bc394619-b279-4333-bc91-4eb1488001b5/Drumm Chair.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
drummChair.addComponentOrReplace(gltfShape9)

const barBlack = new Entity('barBlack')
engine.addEntity(barBlack)
barBlack.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(5.5, 0, 21),
  rotation: new Quaternion(-1.2491069512282973e-14, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
barBlack.addComponentOrReplace(transform32)
const gltfShape10 = new GLTFShape("17b9739f-a1d4-494c-8766-8429067d6b19/Bar_Black.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
barBlack.addComponentOrReplace(gltfShape10)

const deckRailing = new Entity('deckRailing')
engine.addEntity(deckRailing)
deckRailing.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(8, 7.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000008344650269)
})
deckRailing.addComponentOrReplace(transform33)
const gltfShape11 = new GLTFShape("83554f07-9f86-431a-ab32-a545a0d4ab21/Deck Railing.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
deckRailing.addComponentOrReplace(gltfShape11)

const deckRailing2 = new Entity('deckRailing2')
engine.addEntity(deckRailing2)
deckRailing2.setParent(_scene)
deckRailing2.addComponentOrReplace(gltfShape11)
const transform34 = new Transform({
  position: new Vector3(6.5, 7.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.000001072883606)
})
deckRailing2.addComponentOrReplace(transform34)

const deckRailing3 = new Entity('deckRailing3')
engine.addEntity(deckRailing3)
deckRailing3.setParent(_scene)
deckRailing3.addComponentOrReplace(gltfShape11)
const transform35 = new Transform({
  position: new Vector3(5, 7.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.000001311302185)
})
deckRailing3.addComponentOrReplace(transform35)

const deckRailing4 = new Entity('deckRailing4')
engine.addEntity(deckRailing4)
deckRailing4.setParent(_scene)
deckRailing4.addComponentOrReplace(gltfShape11)
const transform36 = new Transform({
  position: new Vector3(3.5, 7.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.0000020265579224)
})
deckRailing4.addComponentOrReplace(transform36)

const deckRailing5 = new Entity('deckRailing5')
engine.addEntity(deckRailing5)
deckRailing5.setParent(_scene)
deckRailing5.addComponentOrReplace(gltfShape11)
const transform37 = new Transform({
  position: new Vector3(2, 7.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000022649765015)
})
deckRailing5.addComponentOrReplace(transform37)

const deckRailing6 = new Entity('deckRailing6')
engine.addEntity(deckRailing6)
deckRailing6.setParent(_scene)
deckRailing6.addComponentOrReplace(gltfShape11)
const transform38 = new Transform({
  position: new Vector3(9.5, 7.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000015497207642)
})
deckRailing6.addComponentOrReplace(transform38)

const deckRailing7 = new Entity('deckRailing7')
engine.addEntity(deckRailing7)
deckRailing7.setParent(_scene)
deckRailing7.addComponentOrReplace(gltfShape11)
const transform39 = new Transform({
  position: new Vector3(11, 7.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.000001311302185)
})
deckRailing7.addComponentOrReplace(transform39)

const deckRailing8 = new Entity('deckRailing8')
engine.addEntity(deckRailing8)
deckRailing8.setParent(_scene)
deckRailing8.addComponentOrReplace(gltfShape11)
const transform40 = new Transform({
  position: new Vector3(12.5, 7.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.000001072883606)
})
deckRailing8.addComponentOrReplace(transform40)

const deckRailing9 = new Entity('deckRailing9')
engine.addEntity(deckRailing9)
deckRailing9.setParent(_scene)
deckRailing9.addComponentOrReplace(gltfShape11)
const transform41 = new Transform({
  position: new Vector3(14, 7.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.000001311302185)
})
deckRailing9.addComponentOrReplace(transform41)

const deckRailing10 = new Entity('deckRailing10')
engine.addEntity(deckRailing10)
deckRailing10.setParent(_scene)
deckRailing10.addComponentOrReplace(gltfShape11)
const transform42 = new Transform({
  position: new Vector3(15, 7.5, 30.5),
  rotation: new Quaternion(-2.177062080483132e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(1.000002384185791, 1, 1.0000020265579224)
})
deckRailing10.addComponentOrReplace(transform42)

const deckRailing11 = new Entity('deckRailing11')
engine.addEntity(deckRailing11)
deckRailing11.setParent(_scene)
deckRailing11.addComponentOrReplace(gltfShape11)
const transform43 = new Transform({
  position: new Vector3(1.5, 7.5, 30.5),
  rotation: new Quaternion(-2.177062080483132e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(1.000002384185791, 1, 1.0000020265579224)
})
deckRailing11.addComponentOrReplace(transform43)

const stairsFloating3 = new Entity('stairsFloating3')
engine.addEntity(stairsFloating3)
stairsFloating3.setParent(_scene)
stairsFloating3.addComponentOrReplace(gltfShape6)
const transform44 = new Transform({
  position: new Vector3(12.5, 8, 21),
  rotation: new Quaternion(-8.467931522269326e-15, 1, -1.1920928244535389e-7, 2.2351741790771484e-8),
  scale: new Vector3(1, 1, 1)
})
stairsFloating3.addComponentOrReplace(transform44)

const wallPlainGlass6 = new Entity('wallPlainGlass6')
engine.addEntity(wallPlainGlass6)
wallPlainGlass6.setParent(_scene)
wallPlainGlass6.addComponentOrReplace(gltfShape2)
const transform45 = new Transform({
  position: new Vector3(15, 12, 29),
  rotation: new Quaternion(-0.7071070075035095, -1.0536687966578029e-8, 9.483043328373242e-8, 0.7071065902709961),
  scale: new Vector3(2.294999122619629, 1.0000004768371582, 1.0000009536743164)
})
wallPlainGlass6.addComponentOrReplace(transform45)

const stairsFloating4 = new Entity('stairsFloating4')
engine.addEntity(stairsFloating4)
stairsFloating4.setParent(_scene)
stairsFloating4.addComponentOrReplace(gltfShape6)
const transform46 = new Transform({
  position: new Vector3(12.5, 12, 25.5),
  rotation: new Quaternion(0, 0, 0, -1),
  scale: new Vector3(1, 1, 1)
})
stairsFloating4.addComponentOrReplace(transform46)

const wallPlainGlass11 = new Entity('wallPlainGlass11')
engine.addEntity(wallPlainGlass11)
wallPlainGlass11.setParent(_scene)
wallPlainGlass11.addComponentOrReplace(gltfShape2)
const transform47 = new Transform({
  position: new Vector3(15, 16, 19),
  rotation: new Quaternion(-0.7071070075035095, -1.0536687966578029e-8, 9.483043328373242e-8, 0.7071065902709961),
  scale: new Vector3(6.88499641418457, 4.746094226837158, 1.0000009536743164)
})
wallPlainGlass11.addComponentOrReplace(transform47)

const wallPlainGlass12 = new Entity('wallPlainGlass12')
engine.addEntity(wallPlainGlass12)
wallPlainGlass12.setParent(_scene)
wallPlainGlass12.addComponentOrReplace(gltfShape2)
const transform48 = new Transform({
  position: new Vector3(15, 16, 21.5),
  rotation: new Quaternion(-0.7071070075035095, -1.0536687966578029e-8, 9.483043328373242e-8, 0.7071065902709961),
  scale: new Vector3(5.886668682098389, 2.4999959468841553, 1.0000009536743164)
})
wallPlainGlass12.addComponentOrReplace(transform48)

const wallPlainGlass13 = new Entity('wallPlainGlass13')
engine.addEntity(wallPlainGlass13)
wallPlainGlass13.setParent(_scene)
wallPlainGlass13.addComponentOrReplace(gltfShape2)
const transform49 = new Transform({
  position: new Vector3(10, 16, 32),
  rotation: new Quaternion(-0.7071070075035095, -1.0536687966578029e-8, 9.483043328373242e-8, 0.7071065902709961),
  scale: new Vector3(4.415000915527344, 3.7499935626983643, 1.0000009536743164)
})
wallPlainGlass13.addComponentOrReplace(transform49)

const wallPlainGlass14 = new Entity('wallPlainGlass14')
engine.addEntity(wallPlainGlass14)
wallPlainGlass14.setParent(_scene)
wallPlainGlass14.addComponentOrReplace(gltfShape2)
const transform50 = new Transform({
  position: new Vector3(15, 16, 32),
  rotation: new Quaternion(-0.7071070075035095, -1.0536687966578029e-8, 9.483043328373242e-8, 0.7071065902709961),
  scale: new Vector3(5.886668682098389, 0.9374984502792358, 1.0000009536743164)
})
wallPlainGlass14.addComponentOrReplace(transform50)

const wallPlainGlass15 = new Entity('wallPlainGlass15')
engine.addEntity(wallPlainGlass15)
wallPlainGlass15.setParent(_scene)
wallPlainGlass15.addComponentOrReplace(gltfShape2)
const transform51 = new Transform({
  position: new Vector3(15, 16, 29),
  rotation: new Quaternion(-0.7071070075035095, -1.0536687966578029e-8, 9.483043328373242e-8, 0.7071065902709961),
  scale: new Vector3(5.886668682098389, 0.9374984502792358, 1.0000009536743164)
})
wallPlainGlass15.addComponentOrReplace(transform51)

const deckRailing12 = new Entity('deckRailing12')
engine.addEntity(deckRailing12)
deckRailing12.setParent(_scene)
deckRailing12.addComponentOrReplace(gltfShape11)
const transform52 = new Transform({
  position: new Vector3(14, 7.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.000001311302185)
})
deckRailing12.addComponentOrReplace(transform52)

const deckRailing13 = new Entity('deckRailing13')
engine.addEntity(deckRailing13)
deckRailing13.setParent(_scene)
deckRailing13.addComponentOrReplace(gltfShape11)
const transform53 = new Transform({
  position: new Vector3(12.5, 7.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.000001072883606)
})
deckRailing13.addComponentOrReplace(transform53)

const deckRailing14 = new Entity('deckRailing14')
engine.addEntity(deckRailing14)
deckRailing14.setParent(_scene)
deckRailing14.addComponentOrReplace(gltfShape11)
const transform54 = new Transform({
  position: new Vector3(11, 7.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.000001311302185)
})
deckRailing14.addComponentOrReplace(transform54)

const deckRailing15 = new Entity('deckRailing15')
engine.addEntity(deckRailing15)
deckRailing15.setParent(_scene)
deckRailing15.addComponentOrReplace(gltfShape11)
const transform55 = new Transform({
  position: new Vector3(9.5, 7.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000015497207642)
})
deckRailing15.addComponentOrReplace(transform55)

const deckRailing16 = new Entity('deckRailing16')
engine.addEntity(deckRailing16)
deckRailing16.setParent(_scene)
deckRailing16.addComponentOrReplace(gltfShape11)
const transform56 = new Transform({
  position: new Vector3(8, 7.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000008344650269)
})
deckRailing16.addComponentOrReplace(transform56)

const deckRailing17 = new Entity('deckRailing17')
engine.addEntity(deckRailing17)
deckRailing17.setParent(_scene)
deckRailing17.addComponentOrReplace(gltfShape11)
const transform57 = new Transform({
  position: new Vector3(6.5, 7.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.000001072883606)
})
deckRailing17.addComponentOrReplace(transform57)

const deckRailing18 = new Entity('deckRailing18')
engine.addEntity(deckRailing18)
deckRailing18.setParent(_scene)
deckRailing18.addComponentOrReplace(gltfShape11)
const transform58 = new Transform({
  position: new Vector3(5, 7.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.000001311302185)
})
deckRailing18.addComponentOrReplace(transform58)

const deckRailing19 = new Entity('deckRailing19')
engine.addEntity(deckRailing19)
deckRailing19.setParent(_scene)
deckRailing19.addComponentOrReplace(gltfShape11)
const transform59 = new Transform({
  position: new Vector3(3.5, 7.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.0000020265579224)
})
deckRailing19.addComponentOrReplace(transform59)

const deckRailing20 = new Entity('deckRailing20')
engine.addEntity(deckRailing20)
deckRailing20.setParent(_scene)
deckRailing20.addComponentOrReplace(gltfShape11)
const transform60 = new Transform({
  position: new Vector3(2, 7.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000022649765015)
})
deckRailing20.addComponentOrReplace(transform60)

const deckRailing21 = new Entity('deckRailing21')
engine.addEntity(deckRailing21)
deckRailing21.setParent(_scene)
deckRailing21.addComponentOrReplace(gltfShape11)
const transform61 = new Transform({
  position: new Vector3(14, 7.5, 11.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000015497207642)
})
deckRailing21.addComponentOrReplace(transform61)

const deckRailing22 = new Entity('deckRailing22')
engine.addEntity(deckRailing22)
deckRailing22.setParent(_scene)
deckRailing22.addComponentOrReplace(gltfShape11)
const transform62 = new Transform({
  position: new Vector3(12.5, 7.5, 11.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.000001311302185)
})
deckRailing22.addComponentOrReplace(transform62)

const deckRailing23 = new Entity('deckRailing23')
engine.addEntity(deckRailing23)
deckRailing23.setParent(_scene)
deckRailing23.addComponentOrReplace(gltfShape11)
const transform63 = new Transform({
  position: new Vector3(11, 7.5, 11.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000015497207642)
})
deckRailing23.addComponentOrReplace(transform63)

const deckRailing24 = new Entity('deckRailing24')
engine.addEntity(deckRailing24)
deckRailing24.setParent(_scene)
deckRailing24.addComponentOrReplace(gltfShape11)
const transform64 = new Transform({
  position: new Vector3(9.5, 7.5, 11.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.0000017881393433)
})
deckRailing24.addComponentOrReplace(transform64)

const deckRailing25 = new Entity('deckRailing25')
engine.addEntity(deckRailing25)
deckRailing25.setParent(_scene)
deckRailing25.addComponentOrReplace(gltfShape11)
const transform65 = new Transform({
  position: new Vector3(8, 7.5, 11.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.000001072883606)
})
deckRailing25.addComponentOrReplace(transform65)

const deckRailing26 = new Entity('deckRailing26')
engine.addEntity(deckRailing26)
deckRailing26.setParent(_scene)
deckRailing26.addComponentOrReplace(gltfShape11)
const transform66 = new Transform({
  position: new Vector3(6.5, 7.5, 11.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.000001311302185)
})
deckRailing26.addComponentOrReplace(transform66)

const deckRailing27 = new Entity('deckRailing27')
engine.addEntity(deckRailing27)
deckRailing27.setParent(_scene)
deckRailing27.addComponentOrReplace(gltfShape11)
const transform67 = new Transform({
  position: new Vector3(5, 7.5, 11.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000015497207642)
})
deckRailing27.addComponentOrReplace(transform67)

const deckRailing28 = new Entity('deckRailing28')
engine.addEntity(deckRailing28)
deckRailing28.setParent(_scene)
deckRailing28.addComponentOrReplace(gltfShape11)
const transform68 = new Transform({
  position: new Vector3(3.5, 7.5, 11.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000022649765015)
})
deckRailing28.addComponentOrReplace(transform68)

const deckRailing29 = new Entity('deckRailing29')
engine.addEntity(deckRailing29)
deckRailing29.setParent(_scene)
deckRailing29.addComponentOrReplace(gltfShape11)
const transform69 = new Transform({
  position: new Vector3(2, 7.5, 11.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1, 1.0000025033950806)
})
deckRailing29.addComponentOrReplace(transform69)

const deckRailing30 = new Entity('deckRailing30')
engine.addEntity(deckRailing30)
deckRailing30.setParent(_scene)
deckRailing30.addComponentOrReplace(gltfShape11)
const transform70 = new Transform({
  position: new Vector3(14, 15.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000015497207642)
})
deckRailing30.addComponentOrReplace(transform70)

const deckRailing31 = new Entity('deckRailing31')
engine.addEntity(deckRailing31)
deckRailing31.setParent(_scene)
deckRailing31.addComponentOrReplace(gltfShape11)
const transform71 = new Transform({
  position: new Vector3(12.5, 15.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.000001311302185)
})
deckRailing31.addComponentOrReplace(transform71)

const deckRailing32 = new Entity('deckRailing32')
engine.addEntity(deckRailing32)
deckRailing32.setParent(_scene)
deckRailing32.addComponentOrReplace(gltfShape11)
const transform72 = new Transform({
  position: new Vector3(11, 15.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000015497207642)
})
deckRailing32.addComponentOrReplace(transform72)

const deckRailing33 = new Entity('deckRailing33')
engine.addEntity(deckRailing33)
deckRailing33.setParent(_scene)
deckRailing33.addComponentOrReplace(gltfShape11)
const transform73 = new Transform({
  position: new Vector3(9.5, 15.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.0000017881393433)
})
deckRailing33.addComponentOrReplace(transform73)

const deckRailing34 = new Entity('deckRailing34')
engine.addEntity(deckRailing34)
deckRailing34.setParent(_scene)
deckRailing34.addComponentOrReplace(gltfShape11)
const transform74 = new Transform({
  position: new Vector3(8, 15.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.000001072883606)
})
deckRailing34.addComponentOrReplace(transform74)

const deckRailing35 = new Entity('deckRailing35')
engine.addEntity(deckRailing35)
deckRailing35.setParent(_scene)
deckRailing35.addComponentOrReplace(gltfShape11)
const transform75 = new Transform({
  position: new Vector3(6.5, 15.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.000001311302185)
})
deckRailing35.addComponentOrReplace(transform75)

const deckRailing36 = new Entity('deckRailing36')
engine.addEntity(deckRailing36)
deckRailing36.setParent(_scene)
deckRailing36.addComponentOrReplace(gltfShape11)
const transform76 = new Transform({
  position: new Vector3(5, 15.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000015497207642)
})
deckRailing36.addComponentOrReplace(transform76)

const deckRailing37 = new Entity('deckRailing37')
engine.addEntity(deckRailing37)
deckRailing37.setParent(_scene)
deckRailing37.addComponentOrReplace(gltfShape11)
const transform77 = new Transform({
  position: new Vector3(3.5, 15.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000022649765015)
})
deckRailing37.addComponentOrReplace(transform77)

const deckRailing38 = new Entity('deckRailing38')
engine.addEntity(deckRailing38)
deckRailing38.setParent(_scene)
deckRailing38.addComponentOrReplace(gltfShape11)
const transform78 = new Transform({
  position: new Vector3(2, 15.5, 31.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1, 1.0000025033950806)
})
deckRailing38.addComponentOrReplace(transform78)

const deckRailing39 = new Entity('deckRailing39')
engine.addEntity(deckRailing39)
deckRailing39.setParent(_scene)
deckRailing39.addComponentOrReplace(gltfShape11)
const transform79 = new Transform({
  position: new Vector3(13.5, 15.5, 0),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.0000020265579224)
})
deckRailing39.addComponentOrReplace(transform79)

const deckRailing40 = new Entity('deckRailing40')
engine.addEntity(deckRailing40)
deckRailing40.setParent(_scene)
deckRailing40.addComponentOrReplace(gltfShape11)
const transform80 = new Transform({
  position: new Vector3(12, 15.5, 0),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.0000017881393433)
})
deckRailing40.addComponentOrReplace(transform80)

const deckRailing41 = new Entity('deckRailing41')
engine.addEntity(deckRailing41)
deckRailing41.setParent(_scene)
deckRailing41.addComponentOrReplace(gltfShape11)
const transform81 = new Transform({
  position: new Vector3(10.5, 15.5, 0),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.0000020265579224)
})
deckRailing41.addComponentOrReplace(transform81)

const deckRailing42 = new Entity('deckRailing42')
engine.addEntity(deckRailing42)
deckRailing42.setParent(_scene)
deckRailing42.addComponentOrReplace(gltfShape11)
const transform82 = new Transform({
  position: new Vector3(9, 15.5, 0),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000022649765015)
})
deckRailing42.addComponentOrReplace(transform82)

const deckRailing43 = new Entity('deckRailing43')
engine.addEntity(deckRailing43)
deckRailing43.setParent(_scene)
deckRailing43.addComponentOrReplace(gltfShape11)
const transform83 = new Transform({
  position: new Vector3(7.5, 15.5, 0),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000015497207642)
})
deckRailing43.addComponentOrReplace(transform83)

const deckRailing44 = new Entity('deckRailing44')
engine.addEntity(deckRailing44)
deckRailing44.setParent(_scene)
deckRailing44.addComponentOrReplace(gltfShape11)
const transform84 = new Transform({
  position: new Vector3(6, 15.5, 0),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.0000017881393433)
})
deckRailing44.addComponentOrReplace(transform84)

const deckRailing45 = new Entity('deckRailing45')
engine.addEntity(deckRailing45)
deckRailing45.setParent(_scene)
deckRailing45.addComponentOrReplace(gltfShape11)
const transform85 = new Transform({
  position: new Vector3(4.5, 15.5, 0),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.0000020265579224)
})
deckRailing45.addComponentOrReplace(transform85)

const deckRailing46 = new Entity('deckRailing46')
engine.addEntity(deckRailing46)
deckRailing46.setParent(_scene)
deckRailing46.addComponentOrReplace(gltfShape11)
const transform86 = new Transform({
  position: new Vector3(3, 15.5, 0),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 1, 1.0000027418136597)
})
deckRailing46.addComponentOrReplace(transform86)

const deckRailing47 = new Entity('deckRailing47')
engine.addEntity(deckRailing47)
deckRailing47.setParent(_scene)
deckRailing47.addComponentOrReplace(gltfShape11)
const transform87 = new Transform({
  position: new Vector3(2, 15.5, 0),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 1, 1.0000032186508179)
})
deckRailing47.addComponentOrReplace(transform87)

const deckRailing48 = new Entity('deckRailing48')
engine.addEntity(deckRailing48)
deckRailing48.setParent(_scene)
deckRailing48.addComponentOrReplace(gltfShape11)
const transform88 = new Transform({
  position: new Vector3(1.5, 15.500000953674316, 12.5),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000027418136597, 1, 1.000002384185791)
})
deckRailing48.addComponentOrReplace(transform88)

const deckRailing49 = new Entity('deckRailing49')
engine.addEntity(deckRailing49)
deckRailing49.setParent(_scene)
deckRailing49.addComponentOrReplace(gltfShape11)
const transform89 = new Transform({
  position: new Vector3(1.5, 15.500000953674316, 11),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000025033950806, 1, 1.000002145767212)
})
deckRailing49.addComponentOrReplace(transform89)

const deckRailing50 = new Entity('deckRailing50')
engine.addEntity(deckRailing50)
deckRailing50.setParent(_scene)
deckRailing50.addComponentOrReplace(gltfShape11)
const transform90 = new Transform({
  position: new Vector3(1.5, 15.5, 9.5),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000027418136597, 1, 1.000002384185791)
})
deckRailing50.addComponentOrReplace(transform90)

const deckRailing51 = new Entity('deckRailing51')
engine.addEntity(deckRailing51)
deckRailing51.setParent(_scene)
deckRailing51.addComponentOrReplace(gltfShape11)
const transform91 = new Transform({
  position: new Vector3(1.5, 15.5, 8),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000029802322388, 1, 1.0000026226043701)
})
deckRailing51.addComponentOrReplace(transform91)

const deckRailing52 = new Entity('deckRailing52')
engine.addEntity(deckRailing52)
deckRailing52.setParent(_scene)
deckRailing52.addComponentOrReplace(gltfShape11)
const transform92 = new Transform({
  position: new Vector3(1.5, 15.5, 6.5),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000022649765015, 1, 1.0000019073486328)
})
deckRailing52.addComponentOrReplace(transform92)

const deckRailing53 = new Entity('deckRailing53')
engine.addEntity(deckRailing53)
deckRailing53.setParent(_scene)
deckRailing53.addComponentOrReplace(gltfShape11)
const transform93 = new Transform({
  position: new Vector3(1.5, 15.5, 5),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000025033950806, 1, 1.000002145767212)
})
deckRailing53.addComponentOrReplace(transform93)

const deckRailing54 = new Entity('deckRailing54')
engine.addEntity(deckRailing54)
deckRailing54.setParent(_scene)
deckRailing54.addComponentOrReplace(gltfShape11)
const transform94 = new Transform({
  position: new Vector3(1.5, 15.5, 3.5),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000027418136597, 1, 1.000002384185791)
})
deckRailing54.addComponentOrReplace(transform94)

const deckRailing55 = new Entity('deckRailing55')
engine.addEntity(deckRailing55)
deckRailing55.setParent(_scene)
deckRailing55.addComponentOrReplace(gltfShape11)
const transform95 = new Transform({
  position: new Vector3(1.4999995231628418, 15.499999046325684, 2),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.000003457069397, 1, 1.0000030994415283)
})
deckRailing55.addComponentOrReplace(transform95)

const deckRailing56 = new Entity('deckRailing56')
engine.addEntity(deckRailing56)
deckRailing56.setParent(_scene)
deckRailing56.addComponentOrReplace(gltfShape11)
const transform96 = new Transform({
  position: new Vector3(1.4999995231628418, 15.499999046325684, 1),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.000003695487976, 1, 1.0000033378601074)
})
deckRailing56.addComponentOrReplace(transform96)

const deckRailing57 = new Entity('deckRailing57')
engine.addEntity(deckRailing57)
deckRailing57.setParent(_scene)
deckRailing57.addComponentOrReplace(gltfShape11)
const transform97 = new Transform({
  position: new Vector3(1.500000238418579, 15.500000953674316, 25.75),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000027418136597, 1, 1.000002384185791)
})
deckRailing57.addComponentOrReplace(transform97)

const deckRailing58 = new Entity('deckRailing58')
engine.addEntity(deckRailing58)
deckRailing58.setParent(_scene)
deckRailing58.addComponentOrReplace(gltfShape11)
const transform98 = new Transform({
  position: new Vector3(1.500000238418579, 15.500000953674316, 24.25),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000025033950806, 1, 1.000002145767212)
})
deckRailing58.addComponentOrReplace(transform98)

const deckRailing59 = new Entity('deckRailing59')
engine.addEntity(deckRailing59)
deckRailing59.setParent(_scene)
deckRailing59.addComponentOrReplace(gltfShape11)
const transform99 = new Transform({
  position: new Vector3(1.500000238418579, 15.5, 22.75),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000027418136597, 1, 1.000002384185791)
})
deckRailing59.addComponentOrReplace(transform99)

const deckRailing60 = new Entity('deckRailing60')
engine.addEntity(deckRailing60)
deckRailing60.setParent(_scene)
deckRailing60.addComponentOrReplace(gltfShape11)
const transform100 = new Transform({
  position: new Vector3(1.500000238418579, 15.5, 21.25),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000029802322388, 1, 1.0000026226043701)
})
deckRailing60.addComponentOrReplace(transform100)

const deckRailing61 = new Entity('deckRailing61')
engine.addEntity(deckRailing61)
deckRailing61.setParent(_scene)
deckRailing61.addComponentOrReplace(gltfShape11)
const transform101 = new Transform({
  position: new Vector3(1.500000238418579, 15.5, 19.75),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000022649765015, 1, 1.0000019073486328)
})
deckRailing61.addComponentOrReplace(transform101)

const deckRailing62 = new Entity('deckRailing62')
engine.addEntity(deckRailing62)
deckRailing62.setParent(_scene)
deckRailing62.addComponentOrReplace(gltfShape11)
const transform102 = new Transform({
  position: new Vector3(1.500000238418579, 15.5, 18.25),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000025033950806, 1, 1.000002145767212)
})
deckRailing62.addComponentOrReplace(transform102)

const deckRailing63 = new Entity('deckRailing63')
engine.addEntity(deckRailing63)
deckRailing63.setParent(_scene)
deckRailing63.addComponentOrReplace(gltfShape11)
const transform103 = new Transform({
  position: new Vector3(1.500000238418579, 15.5, 16.75),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000027418136597, 1, 1.000002384185791)
})
deckRailing63.addComponentOrReplace(transform103)

const deckRailing64 = new Entity('deckRailing64')
engine.addEntity(deckRailing64)
deckRailing64.setParent(_scene)
deckRailing64.addComponentOrReplace(gltfShape11)
const transform104 = new Transform({
  position: new Vector3(1.499999761581421, 15.499999046325684, 15.25),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.000003457069397, 1, 1.0000030994415283)
})
deckRailing64.addComponentOrReplace(transform104)

const deckRailing65 = new Entity('deckRailing65')
engine.addEntity(deckRailing65)
deckRailing65.setParent(_scene)
deckRailing65.addComponentOrReplace(gltfShape11)
const transform105 = new Transform({
  position: new Vector3(1.499999761581421, 15.499999046325684, 14.25),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.000003695487976, 1, 1.0000033378601074)
})
deckRailing65.addComponentOrReplace(transform105)

const deckRailing66 = new Entity('deckRailing66')
engine.addEntity(deckRailing66)
deckRailing66.setParent(_scene)
deckRailing66.addComponentOrReplace(gltfShape11)
const transform106 = new Transform({
  position: new Vector3(15, 15.500000953674316, 25.875),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000027418136597, 1, 1.000002384185791)
})
deckRailing66.addComponentOrReplace(transform106)

const deckRailing67 = new Entity('deckRailing67')
engine.addEntity(deckRailing67)
deckRailing67.setParent(_scene)
deckRailing67.addComponentOrReplace(gltfShape11)
const transform107 = new Transform({
  position: new Vector3(15, 15.500000953674316, 24.375),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000025033950806, 1, 1.000002145767212)
})
deckRailing67.addComponentOrReplace(transform107)

const deckRailing68 = new Entity('deckRailing68')
engine.addEntity(deckRailing68)
deckRailing68.setParent(_scene)
deckRailing68.addComponentOrReplace(gltfShape11)
const transform108 = new Transform({
  position: new Vector3(15, 15.5, 22.875),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000027418136597, 1, 1.000002384185791)
})
deckRailing68.addComponentOrReplace(transform108)

const deckRailing69 = new Entity('deckRailing69')
engine.addEntity(deckRailing69)
deckRailing69.setParent(_scene)
deckRailing69.addComponentOrReplace(gltfShape11)
const transform109 = new Transform({
  position: new Vector3(15, 15.5, 21.375),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000029802322388, 1, 1.0000026226043701)
})
deckRailing69.addComponentOrReplace(transform109)

const deckRailing70 = new Entity('deckRailing70')
engine.addEntity(deckRailing70)
deckRailing70.setParent(_scene)
deckRailing70.addComponentOrReplace(gltfShape11)
const transform110 = new Transform({
  position: new Vector3(15, 15.5, 19.875),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000022649765015, 1, 1.0000019073486328)
})
deckRailing70.addComponentOrReplace(transform110)

const deckRailing71 = new Entity('deckRailing71')
engine.addEntity(deckRailing71)
deckRailing71.setParent(_scene)
deckRailing71.addComponentOrReplace(gltfShape11)
const transform111 = new Transform({
  position: new Vector3(15, 15.5, 18.375),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000025033950806, 1, 1.000002145767212)
})
deckRailing71.addComponentOrReplace(transform111)

const deckRailing72 = new Entity('deckRailing72')
engine.addEntity(deckRailing72)
deckRailing72.setParent(_scene)
deckRailing72.addComponentOrReplace(gltfShape11)
const transform112 = new Transform({
  position: new Vector3(15, 15.5, 16.875),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000027418136597, 1, 1.000002384185791)
})
deckRailing72.addComponentOrReplace(transform112)

const deckRailing73 = new Entity('deckRailing73')
engine.addEntity(deckRailing73)
deckRailing73.setParent(_scene)
deckRailing73.addComponentOrReplace(gltfShape11)
const transform113 = new Transform({
  position: new Vector3(15, 15.499999046325684, 15.375),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.000003457069397, 1, 1.0000030994415283)
})
deckRailing73.addComponentOrReplace(transform113)

const deckRailing74 = new Entity('deckRailing74')
engine.addEntity(deckRailing74)
deckRailing74.setParent(_scene)
deckRailing74.addComponentOrReplace(gltfShape11)
const transform114 = new Transform({
  position: new Vector3(15, 15.499999046325684, 14.375),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.000003695487976, 1, 1.0000033378601074)
})
deckRailing74.addComponentOrReplace(transform114)

const deckRailing75 = new Entity('deckRailing75')
engine.addEntity(deckRailing75)
deckRailing75.setParent(_scene)
deckRailing75.addComponentOrReplace(gltfShape11)
const transform115 = new Transform({
  position: new Vector3(15, 15.500000953674316, 11.125),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000025033950806, 1, 1.000002145767212)
})
deckRailing75.addComponentOrReplace(transform115)

const deckRailing76 = new Entity('deckRailing76')
engine.addEntity(deckRailing76)
deckRailing76.setParent(_scene)
deckRailing76.addComponentOrReplace(gltfShape11)
const transform116 = new Transform({
  position: new Vector3(15, 15.500000953674316, 12.625),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000027418136597, 1, 1.000002384185791)
})
deckRailing76.addComponentOrReplace(transform116)

const deckRailing77 = new Entity('deckRailing77')
engine.addEntity(deckRailing77)
deckRailing77.setParent(_scene)
deckRailing77.addComponentOrReplace(gltfShape11)
const transform117 = new Transform({
  position: new Vector3(15, 15.5, 8.125),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000029802322388, 1, 1.0000026226043701)
})
deckRailing77.addComponentOrReplace(transform117)

const deckRailing78 = new Entity('deckRailing78')
engine.addEntity(deckRailing78)
deckRailing78.setParent(_scene)
deckRailing78.addComponentOrReplace(gltfShape11)
const transform118 = new Transform({
  position: new Vector3(15, 15.5, 9.625),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000027418136597, 1, 1.000002384185791)
})
deckRailing78.addComponentOrReplace(transform118)

const deckRailing79 = new Entity('deckRailing79')
engine.addEntity(deckRailing79)
deckRailing79.setParent(_scene)
deckRailing79.addComponentOrReplace(gltfShape11)
const transform119 = new Transform({
  position: new Vector3(15, 15.5, 6.625),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000022649765015, 1, 1.0000019073486328)
})
deckRailing79.addComponentOrReplace(transform119)

const deckRailing80 = new Entity('deckRailing80')
engine.addEntity(deckRailing80)
deckRailing80.setParent(_scene)
deckRailing80.addComponentOrReplace(gltfShape11)
const transform120 = new Transform({
  position: new Vector3(15, 15.5, 5.125),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000025033950806, 1, 1.000002145767212)
})
deckRailing80.addComponentOrReplace(transform120)

const deckRailing81 = new Entity('deckRailing81')
engine.addEntity(deckRailing81)
deckRailing81.setParent(_scene)
deckRailing81.addComponentOrReplace(gltfShape11)
const transform121 = new Transform({
  position: new Vector3(15, 15.5, 3.625),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000027418136597, 1, 1.000002384185791)
})
deckRailing81.addComponentOrReplace(transform121)

const deckRailing82 = new Entity('deckRailing82')
engine.addEntity(deckRailing82)
deckRailing82.setParent(_scene)
deckRailing82.addComponentOrReplace(gltfShape11)
const transform122 = new Transform({
  position: new Vector3(15, 15.499999046325684, 2.125),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.000003457069397, 1, 1.0000030994415283)
})
deckRailing82.addComponentOrReplace(transform122)

const deckRailing83 = new Entity('deckRailing83')
engine.addEntity(deckRailing83)
deckRailing83.setParent(_scene)
deckRailing83.addComponentOrReplace(gltfShape11)
const transform123 = new Transform({
  position: new Vector3(15, 15.499999046325684, 1.125),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.000003695487976, 1, 1.0000033378601074)
})
deckRailing83.addComponentOrReplace(transform123)

const deckRailing84 = new Entity('deckRailing84')
engine.addEntity(deckRailing84)
deckRailing84.setParent(_scene)
deckRailing84.addComponentOrReplace(gltfShape11)
const transform124 = new Transform({
  position: new Vector3(15, 15.500000953674316, 30.5),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000027418136597, 1, 1.000002384185791)
})
deckRailing84.addComponentOrReplace(transform124)

const deckRailing85 = new Entity('deckRailing85')
engine.addEntity(deckRailing85)
deckRailing85.setParent(_scene)
deckRailing85.addComponentOrReplace(gltfShape11)
const transform125 = new Transform({
  position: new Vector3(15, 15.500000953674316, 29),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000025033950806, 1, 1.000002145767212)
})
deckRailing85.addComponentOrReplace(transform125)

const deckRailing86 = new Entity('deckRailing86')
engine.addEntity(deckRailing86)
deckRailing86.setParent(_scene)
deckRailing86.addComponentOrReplace(gltfShape11)
const transform126 = new Transform({
  position: new Vector3(15, 15.5, 27.5),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000027418136597, 1, 1.000002384185791)
})
deckRailing86.addComponentOrReplace(transform126)

const deckRailing87 = new Entity('deckRailing87')
engine.addEntity(deckRailing87)
deckRailing87.setParent(_scene)
deckRailing87.addComponentOrReplace(gltfShape11)
const transform127 = new Transform({
  position: new Vector3(1.5, 15.500000953674316, 30.5),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000027418136597, 1, 1.000002384185791)
})
deckRailing87.addComponentOrReplace(transform127)

const deckRailing88 = new Entity('deckRailing88')
engine.addEntity(deckRailing88)
deckRailing88.setParent(_scene)
deckRailing88.addComponentOrReplace(gltfShape11)
const transform128 = new Transform({
  position: new Vector3(1.5, 15.500000953674316, 29),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000025033950806, 1, 1.000002145767212)
})
deckRailing88.addComponentOrReplace(transform128)

const deckRailing89 = new Entity('deckRailing89')
engine.addEntity(deckRailing89)
deckRailing89.setParent(_scene)
deckRailing89.addComponentOrReplace(gltfShape11)
const transform129 = new Transform({
  position: new Vector3(1.5, 15.5, 27.5),
  rotation: new Quaternion(2.1770622922413687e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000027418136597, 1, 1.000002384185791)
})
deckRailing89.addComponentOrReplace(transform129)

const neonMANASign = new Entity('neonMANASign')
engine.addEntity(neonMANASign)
neonMANASign.setParent(_scene)
const transform130 = new Transform({
  position: new Vector3(6.5, 2, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
neonMANASign.addComponentOrReplace(transform130)
const gltfShape12 = new GLTFShape("2f7ca486-377c-453d-bbf5-24b57f456e9e/Neon_MANA_Sign.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
neonMANASign.addComponentOrReplace(gltfShape12)

const neonRectangleSign = new Entity('neonRectangleSign')
engine.addEntity(neonRectangleSign)
neonRectangleSign.setParent(_scene)
const transform131 = new Transform({
  position: new Vector3(12, 1, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 4.5, 1)
})
neonRectangleSign.addComponentOrReplace(transform131)
const gltfShape13 = new GLTFShape("5e74295e-315c-4581-be84-61a8069f1f4d/Neon_Rectangle_Sign.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
neonRectangleSign.addComponentOrReplace(gltfShape13)

const smallRope = new Entity('smallRope')
engine.addEntity(smallRope)
smallRope.setParent(_scene)
const transform132 = new Transform({
  position: new Vector3(7, 0.5, 29.5),
  rotation: new Quaternion(2.768745934359309e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
smallRope.addComponentOrReplace(transform132)
const gltfShape14 = new GLTFShape("8bff0afc-a55e-459f-9fc3-61f9d4261b20/ChineseLampRopeSmall_01/ChineseLampRopeSmall_01.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
smallRope.addComponentOrReplace(gltfShape14)

const trafficPostBlue = new Entity('trafficPostBlue')
engine.addEntity(trafficPostBlue)
trafficPostBlue.setParent(_scene)
const transform133 = new Transform({
  position: new Vector3(7, 0, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
trafficPostBlue.addComponentOrReplace(transform133)
const gltfShape15 = new GLTFShape("90dd57b4-8284-4c27-bf85-17ef02f978c6/Traffic_Post_Blue.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
trafficPostBlue.addComponentOrReplace(gltfShape15)

const trafficPostBlue2 = new Entity('trafficPostBlue2')
engine.addEntity(trafficPostBlue2)
trafficPostBlue2.setParent(_scene)
trafficPostBlue2.addComponentOrReplace(gltfShape15)
const transform134 = new Transform({
  position: new Vector3(7, 0, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
trafficPostBlue2.addComponentOrReplace(transform134)

const trafficPostBlue3 = new Entity('trafficPostBlue3')
engine.addEntity(trafficPostBlue3)
trafficPostBlue3.setParent(_scene)
trafficPostBlue3.addComponentOrReplace(gltfShape15)
const transform135 = new Transform({
  position: new Vector3(9, 0, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
trafficPostBlue3.addComponentOrReplace(transform135)

const smallRope2 = new Entity('smallRope2')
engine.addEntity(smallRope2)
smallRope2.setParent(_scene)
smallRope2.addComponentOrReplace(gltfShape14)
const transform136 = new Transform({
  position: new Vector3(9, 0.5, 29.5),
  rotation: new Quaternion(2.768745934359309e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
smallRope2.addComponentOrReplace(transform136)

const trafficPostBlue4 = new Entity('trafficPostBlue4')
engine.addEntity(trafficPostBlue4)
trafficPostBlue4.setParent(_scene)
trafficPostBlue4.addComponentOrReplace(gltfShape15)
const transform137 = new Transform({
  position: new Vector3(9, 0, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
trafficPostBlue4.addComponentOrReplace(transform137)

const poster = new Entity('poster')
engine.addEntity(poster)
poster.setParent(_scene)
const transform138 = new Transform({
  position: new Vector3(1.5, 1, 24),
  rotation: new Quaternion(2.1888822929131676e-16, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(6.250011444091797, 6, 1.0000014305114746)
})
poster.addComponentOrReplace(transform138)
const gltfShape16 = new GLTFShape("4e6e5281-f845-42e6-b39f-4ac132411df1/Poster1.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
poster.addComponentOrReplace(gltfShape16)

const poster2 = new Entity('poster2')
engine.addEntity(poster2)
poster2.setParent(_scene)
const transform139 = new Transform({
  position: new Vector3(14.5, 2.5, 7),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(4.500011920928955, 3.75, 1.0000026226043701)
})
poster2.addComponentOrReplace(transform139)
const gltfShape17 = new GLTFShape("59ae2298-4182-4bd3-9e6f-d8accf5c46b2/Poster11.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
poster2.addComponentOrReplace(gltfShape17)
