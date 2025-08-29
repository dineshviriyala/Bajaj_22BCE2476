module.exports = (req, res) => {
    try {
        if (req.method !== "POST") {
            return res.status(405).json({ is_success: false, message: "Method Not Allowed" });
        }

        const data = req.body.data || [];

        let odd_numbers = [];
        let even_numbers = [];
        let alphabets = [];
        let special_characters = [];
        let sum = 0;

        data.forEach(item => {
            if (/^\d+$/.test(item)) { // numbers
                let num = parseInt(item, 10);
                if (num % 2 === 0) even_numbers.push(item.toString());
                else odd_numbers.push(item.toString());
                sum += num;
            } else if (/^[a-zA-Z]+$/.test(item)) { // alphabets
                alphabets.push(item.toUpperCase());
            } else { // special characters
                special_characters.push(item);
            }
        });

        // Concatenate all alphabets in reverse with alternating caps
        let concat_string = alphabets.join("").split("").reverse()
            .map((ch, idx) => idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase())
            .join("");

        res.status(200).json({
            is_success: true,
            user_id: "viriyala_dinesh_01012003", // replace with your full name + DOB
            email: "viriyaladinesh2022@vitstudent.ac.in",
            roll_number: "22BCE2476",
            odd_numbers,
            even_numbers,
            alphabets,
            special_characters,
            sum: sum.toString(),
            concat_string
        });

    } catch (err) {
        res.status(500).json({ is_success: false, message: err.message });
    }
};
