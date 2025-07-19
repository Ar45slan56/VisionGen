// components/TeamMember.js
export default function TeamMember({ name, role, img }) {
  return (
    <div className="member">
      <img src={img} alt={`${name}'s photo`} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}
