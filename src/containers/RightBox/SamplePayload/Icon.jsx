
export const CopyIcon = ({ type }) => {
  return (
      <svg width='20' height='20' viewBox='0 0 25 25' xmlns='http://www.w3.org/2000/svg'>
          <rect width='18' height='18' stroke='none' fill={type === 'code' ? '#ffffff' : 'black'} opacity='0'/>
          <g>
              <path d="M 4 2 C 2.895 2 2 2.895 2 4 L 2 18 L 4 18 L 4 4 L 18 4 L 18 2 L 4 2 z M 8 6 C 6.895 6 6 6.895 6 8 L 6 20 C 6 21.105 6.895 22 8 22 L 20 22 C 21.105 22 22 21.105 22 20 L 22 8 C 22 6.895 21.105 6 20 6 L 8 6 z M 8 8 L 20 8 L 20 20 L 8 20 L 8 8 z" fill={type === 'code' ? '#ffffff' : 'black'}/>
          </g>
      </svg>
  );
}

