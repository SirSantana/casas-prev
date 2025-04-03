const renderStars = (rating) => {
  const totalStars = 5;
  const stars = [];

  // Redondea el rating a la mitad más cercana (4.3 => 4.5, 4.6 => 5.0)
  const roundedRating = Math.round(rating * 2) / 2;
  const integerPart = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;

  for (let i = 1; i <= totalStars; i++) {
    let fill;
    if (i <= integerPart) {
      fill = '#3F274F'; // Llena
    } else if (i === integerPart + 1 && hasHalfStar) {
      fill = 'url(#half)'; // Media estrella
    } else {
      fill = '#D6BEFF'; // Vacía
    }

    stars.push(
      <svg
        key={i}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: '4px' }}
      >
        <defs>
          <linearGradient id="half" x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor="#3F274F" />
            <stop offset="50%" stopColor="#3F274F" />
          </linearGradient>
        </defs>
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          fill={fill}
          stroke={i <= integerPart || (i === integerPart + 1 && hasHalfStar) ? '#3F274F' : '#D6BEFF'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return stars;
};

export default renderStars;