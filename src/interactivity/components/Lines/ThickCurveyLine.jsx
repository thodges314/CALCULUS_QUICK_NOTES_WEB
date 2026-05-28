import { CatmullRomCurve3, Vector3, DoubleSide } from "three";

const ThickCurveyLine = ({
  points = [],
  width = 0.02,
  rotationX = 0,
  rotationY = 0,
  rotationZ = 0,
  color,
  shift = [0, 0, 0],
}) => {
  if (points.length < 2) return null;
  let allClose = true;
  for (let i = 1; i < points.length; i++) {
    const dist = Math.hypot(points[i].x - points[0].x, points[i].y - points[0].y);
    if (dist > 0.001) {
      allClose = false;
      break;
    }
  }
  if (allClose) return null;

  const threepoints = points.map((point) => new Vector3(point.x, point.y, 0));
  const curve = new CatmullRomCurve3(threepoints);
  return (
    <mesh
      rotation-x={rotationX}
      rotation-y={rotationY}
      rotation-z={rotationZ}
      position={shift}
    >
      <tubeGeometry
        attach="geometry"
        args={[curve, threepoints.length * 2, width, 16, false]}
      />
      {color ? (
        <meshPhongMaterial color={color} attach="material" side={DoubleSide} />
      ) : (
        <meshNormalMaterial attach="material" side={DoubleSide} />
      )}
    </mesh>
  );
};

export default ThickCurveyLine;
