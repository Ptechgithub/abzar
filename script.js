document.getElementById('base64Form').addEventListener('submit', event => {
  event.preventDefault();
  
  const base64Input = document.getElementById('base64Input').value.trim();
  
  // Validate input length
  if (base64Input.length !== 4) {
    document.getElementById('result').innerText = `ورودی باید 4 کاراکتر باشد. شما فقط ${base64Input.length} کاراکتر وارد کرده‌اید.`;
    return;
  }
  
  // Validate input
  if (!isValidBase64(base64Input)) {
    document.getElementById('result').innerText = 'ورودی نامعتبر است! لطفا یک رشته Base64 معتبر با 4 کاراکتر وارد کنید.';
    return;
  }
  
  const hexString = Array.from(atob(base64Input), char => ('0' + char.charCodeAt(0).toString(16)).slice(-2)).join(',');
  const decimalArray = hexString.split(',').map(hex => parseInt(hex, 16));

  document.getElementById('result').innerHTML = `برای کپی کلیک کنید<br>${decimalArray.map(decimal => `<span class="copyable">${decimal}</span>`).join(', ')}`;
  
  // Add click event listener to copy the content of the clicked element
  const copyableElements = document.querySelectorAll('.copyable');
  copyableElements.forEach(element => {
    element.addEventListener('click', () => {
      const textToCopy = element.innerText;
      navigator.clipboard.writeText(textToCopy)
        .then(() => alert('مقدار کپی شد: ' + textToCopy))
        .catch(err => console.error('خطا در کپی کردن مقدار:', err));
    });
  });
});

document.getElementById('decimalForm').addEventListener('submit', event => {
  event.preventDefault();
  
  const decimalInput = document.getElementById('decimalInput').value.trim();
  
  // Validate input
  if (!isValidDecimalInput(decimalInput)) {
    document.getElementById('result').innerText = 'ورودی نامعتبر است! لطفاً یک رشته Decimal معتبر و با جداکننده کاما وارد کنید.';
    return;
  }
  
  const base64Output = decimalToBase64(decimalInput);
  
  document.getElementById('result').innerHTML = `برای کپی کلیک کنید<br>${base64Output}`;
  
  // Add click event listener to copy the content of the clicked element
  const copyableElement = document.getElementById('result');
  copyableElement.addEventListener('click', () => {
    const textToCopy = base64Output;
    navigator.clipboard.writeText(textToCopy)
      .then(() => alert('مقدار کپی شد: ' + textToCopy))
      .catch(err => console.error('خطا در کپی کردن مقدار:', err));
  });
});

function isValidBase64(str) {
  const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  for (let i = 0; i < str.length; i++) {
    if (validChars.indexOf(str.charAt(i)) === -1) {
      return false;
    }
  }
  return true;
}

function isValidDecimalInput(input) {
  return /^[0-9\s,]+$/.test(input);
}

function decimalToBase64(decimalString) {
  const decimalArray = decimalString.split(',').map(decimal => parseInt(decimal.trim()));
  const asciiString = decimalArray.map(decimal => String.fromCharCode(decimal)).join('');
  const base64String = btoa(asciiString);
  return base64String;
}

function handleLinkClick(event, pageName) {
  event.preventDefault();
  
  var links = document.querySelectorAll('.menu a');
  links.forEach(link => {
    link.style.backgroundColor = '#007bff';
    link.style.color = '#fff';
  });
  
  event.target.style.backgroundColor = '#ffc107';
  event.target.style.color = '#000';
  
  
  if (pageName) {
    window.location.href = pageName;
  }
}

function displayMessage() {
  var links = document.querySelectorAll('.menu a');
  links.forEach(link => {
    link.style.backgroundColor = '#007bff';
    link.style.color = '#fff';
  });
  
  event.target.style.backgroundColor = '#ffc107';
  event.target.style.color = '#000';
  alert('به زودی');
}

function openTelegramChannel() {
  var links = document.querySelectorAll('.menu a');
  links.forEach(link => {
    link.style.backgroundColor = '#007bff';
    link.style.color = '#fff';
  });
  
  event.target.style.backgroundColor = '#ffc107';
  event.target.style.color = '#000';
  window.open('https://t.me/P_tech2024', '_blank');
}