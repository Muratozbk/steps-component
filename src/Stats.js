import React from 'react';

export function Stats({ items }) {
    const numItems = items.length;
    const numPackedItems = items.filter(item => item.packed).length;
    const percentage = Math.round(numPackedItems / numItems * 100);

    return (
        <footer className='stats'>
            <em>
                {percentage === 100 ? 'You packed everything! Ready to go ✈' : }
                💼 You have {numItems} items on your list, and you already packed {numPackedItems} ({percentage}%)
            </em>
        </footer>
    );
}
