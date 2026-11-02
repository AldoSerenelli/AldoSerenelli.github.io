// Assemble the address on user activation to deter basic harvesting.
 document.querySelectorAll('.email-contact').forEach((button) => {
  button.addEventListener('click', () => {
    const user = ['al', 'dos'].join('');
    const host = ['ice', 'csic', 'es'].join('.');
    window.location.href = ['mail', 'to:'].join('') + user + '@' + host;
  });
});
