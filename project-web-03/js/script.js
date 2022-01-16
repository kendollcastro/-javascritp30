const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    //The dataset read-only property of the HTMLElement interface provides read/write access to custom data attributes (data-*) on elements. 
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));