function generateRandomString(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters.charAt(randomIndex);
            }
            return result;
        }

        function fillForm() {
            // Set text inputs and textareas to random strings
            $('form input[type="text"], form textarea').each(function() {
                const randomString = generateRandomString(10); // Change 10 to the desired length
                $(this).val(randomString);
            });

            // Set number inputs to random numbers
            $('form input[type="number"]').each(function() {
                $(this).val(Math.floor(Math.random() * 100));
            });

            // Set file inputs to random file names
            $('form input[type="file"]').each(function() {
                var fileName = 'file' + Math.floor(Math.random() * 1000) + '.txt';
                $(this).val(fileName);
            });

            // Set select boxes to random options
            $('form select').each(function() {
                var options = $(this).find('option');
                var randomIndex = Math.floor(Math.random() * options.length);
                options.eq(randomIndex).prop('selected', true);
            });
        }

        $(document).ready(function() {
            fillForm(); // Call the function on page load
        });
