import affektaLogo from 'figma:asset/45b56ef32b3f6d6cb679f636aa90e882849b0ffe.png';

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <img 
      src={affektaLogo} 
      alt="AFFEKTA LLC - NASA STTR Autonomous Systems" 
      className={className}
      style={{
        mixBlendMode: 'screen',
        filter: 'invert(1) brightness(1.2)'
      }}
    />
  );
}
