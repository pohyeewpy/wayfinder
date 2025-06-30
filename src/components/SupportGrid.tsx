import SupportOption from './SupportOption';

const options = [
  { emoji: '😰', label: 'Anxiety & Worry', tag: 'anxiety', color: 'bg-blue-100' },
  { emoji: '😔', label: 'Feeling Alone', tag: 'community', color: 'bg-purple-100'},
  { emoji: '😵', label: 'Burnout & Stress', tag: 'burnout', color: 'bg-red-100'},
  { emoji: '💙', label: 'Feeling Down', tag: 'help', color: 'bg-orange-100'},
  { emoji: '🏡', label: 'Family Issues', tag: 'home', color: 'bg-yellow-100'},
  { emoji: '📚', label: 'School Pressure', tag: 'career', color: 'bg-green-100'},
];

export default function SupportGrid() {
  return (
    <section className="grid grid-cols-2 gap-4 px-4 pb-10">
      {options.map((opt, i) => (
        <SupportOption key={i} emoji={opt.emoji} label={opt.label} tag={opt.tag} color={opt.color} />
      ))}
    </section>
  );
}
