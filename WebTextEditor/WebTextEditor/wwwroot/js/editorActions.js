const editor = document.getElementById('editor');

document.querySelectorAll('.dropdown-item[data-action]').forEach(item => {
    item.addEventListener('click', async function (e) {
        e.preventDefault();

        const action = this.getAttribute('data-action');
        const sel = window.getSelection();

        editor.focus(); // ensure editor is focused

        if (!sel.rangeCount) return; // no selection

        const range = sel.getRangeAt(0);

        // Ensure selection is inside editor
        if (!editor.contains(range.commonAncestorContainer)) return;

        let selectedText = range.toString();

        switch (action) {
            case 'uppercase':
                replaceSelection(range, selectedText.toUpperCase());
                break;
            case 'lowercase':
                replaceSelection(range, selectedText.toLowerCase());
                break;
            case 'insertDate':
                replaceSelection(range, new Date().toLocaleString());
                break;
            case 'cut':
                await navigator.clipboard.writeText(selectedText);
                replaceSelection(range, ''); // remove selected text
                break;
            case 'copy':
                await navigator.clipboard.writeText(selectedText);
                break;
            case 'paste':
                const clipText = await navigator.clipboard.readText();
                replaceSelection(range, clipText);
                break;
        }
    });
});

/************ Helper Function ************/

function replaceSelection(range, text) {
    range.deleteContents();
    range.insertNode(document.createTextNode(text));
    // Move cursor to end
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    editor.focus();
}
