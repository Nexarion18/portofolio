import { useState } from "react"
import { Button } from "@/Components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/Components/ui/dialog"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"

function Message() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    try {
      const res = await fetch("/.netlify/functions/discord", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `Pesan dari ${name}: ${message}`,
          username: name || "Anonymous",
        }),
      })

      if (!res.ok) throw new Error("Gagal Mengirim Pesan")
      setSuccess(true)
      setName("")
      setMessage("")
    } catch (err) {
      alert("Gagal mengirim pesan.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-12 bg-gray-200 text-gray-600 font-semibold px-6 py-2 w-auto rounded-lg hover:bg-gray-300 transform hover:scale-105 ml-5">
          Send Me Message Here
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogDescription>
              Leave me your message here!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="type your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                className="border rounded px-3 py-2"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            {success && (
              <p className="text-green-600 text-sm">Pesan berhasil dikirim!</p>
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="mt-4 hover:bg-gray-300 transform hover:scale-105" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button className="mt-4 hover:bg-gray-300 transform hover:scale-105" type="submit" disabled={loading} >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default Message
