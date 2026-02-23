export const uploadFile = async (file: File | Blob, folder: string) => {

    if (!file) throw new Error("Veuillez selectionner un fichier")

    const formData = new FormData()
    formData.append("file", file)

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload?folder=${folder}`, {
            method: "POST",
            body: formData
        })

        const data = await response.json()
        
        return data
    } catch (error) {
        console.log(error)
    }

}