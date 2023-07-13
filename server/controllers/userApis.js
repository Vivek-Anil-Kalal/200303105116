import axios from "axios";

export const registerUser = async (req, res) => {
  try {
    const { companyName, ownerName, ownerEmail, rollNo, accessCode } = req.body;
    console.log(req.body);

    // if (!companyName || !ownerEmail || !ownerName || !rollNo || !accessCode) {
    //   res.status(400);
    //   throw new Error("All field are mandatory");
    // }
    const resData = await axios.post("http://20.244.56.144/train/register", {
       companyName,
       ownerName,
       ownerEmail,
       rollNo,
       accessCode,
    });

    console.log("res " + resData);
    res.status(200).send(resData.data);
  } catch (err) {
    console.log(err.message);
  }
};