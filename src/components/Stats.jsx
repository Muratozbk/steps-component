export default function Stats({ items }) {
    const numItems = items.length;

    if (!numItems) return (
        <footer className="stats">
            <em>Start adding some items to your packing list 🚀</em>
        </footer>
    );

    const numPackedItems = items.filter(item => item.packed).length;
    const percentage = Math.round(numPackedItems / numItems * 100);

    return (
        <footer className='stats'>
            <em>
                {percentage === 100 ?
                    '🧳 You packed everything! Ready to go ✈'
                    : percentage === 0 ?
                        `📃 You have ${numItems} items on your list, start to pack your items 🧳`
                        :
                        `💼 You have ${numItems} items on your list and you packed ${numPackedItems} ${numPackedItems > 1 ? 'items' : 'item'} (${percentage}%)`}
            </em>
        </footer>
    )
};