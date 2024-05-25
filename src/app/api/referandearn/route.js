import connectDB from "@/lib/dbConnect";

export const POST =  async (req, res) => {
  try {
    await connectDB();

    if (req.method === 'POST') {
      const { name, email, service, whatsapp } = req.body;
      console.log(name)
      console.log(email)

      // Perform any necessary operations with the form data
      // For example, save it to a database

      // Respond with a success message
      res.status(200).json({ message: 'Form submitted successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error handling the request:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
