import './Pieces.css';
import eight from '../../../src/assets/8.png';
import six from '../../../src/assets/6.png';
import four from '../../../src/assets/4.png';
import two from '../../../src/assets/2.png';
import one from '../../../src/assets/1.png';

const PieceValues = [8, 6, 4, 2, 1] as const;

export type NumberOfPieces = (typeof PieceValues)[number]

type PiecesClickHandler = { selectedPiece: NumberOfPieces, setPieceOnClick: (number: NumberOfPieces) => void }
type PieceClickHandler = { isActive: boolean } & PiecesClickHandler;

function Piece({ isActive, selectedPiece, setPieceOnClick }: PieceClickHandler) {
    const getImage = (): string => {
        switch (selectedPiece) {
            case 8:
                return eight
        
            case 6:
                return six;

            case 4:
                return four;

            case 2:
                return two;
            
            case 1:
                return one;
        
            default:
                return '';
        }
    }

    return (
        <button className={isActive ? 'active' : ''} onClick={() => setPieceOnClick(selectedPiece)}>
            <img src={getImage()} alt={selectedPiece + 'Number of Pieces'} width={100} />
        </button>
    )
}

function Pieces({ selectedPiece, setPieceOnClick }: PiecesClickHandler) {
    const options = PieceValues
    const isActive = (piece: NumberOfPieces): boolean => selectedPiece === piece

    return (
        <>
        <h3>Select Number of Pieces</h3>
            {options.map(opt =>
                <Piece key={opt} isActive={isActive(opt)} selectedPiece={opt} setPieceOnClick={setPieceOnClick} />
            )}
        </>
    )
}

export default Pieces;