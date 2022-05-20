class App {
    
    submitProperty() {
        window.event.preventDefault()
        let type = document.querySelector("select[name='type'] option:checked").text
        let area = document.querySelector("input[name='area']").value
        let rented = document.querySelector("input[name='rented']:checked").value

        let property = new Property(type, area, rented)

        this.addPropertyToList(property)
        this.resetForm()
    }

    addPropertyToList(property) {
        let newListValue = document.createElement("li")
        let showProperty = document.createElement("span")
        
        
        if ( property.rented == "Sim" ) {
            let showRented = this.createRentedMark()
            newListValue.appendChild(showRented)
        }
        
        showProperty.innerText = " " + property.type + " - " + property.area + " m² " 
        newListValue.appendChild(showProperty)
        
        let removeButton = this.createRemoveButton()
        
        newListValue.appendChild(removeButton)
        
        document.getElementById("property-list").append(newListValue)
    }
    
    createRentedMark() {
        window.event.preventDefault()
        let showRented = document.createElement("span")

        showRented.style.color = "white"
        showRented.style.backgroundColor = "red"
        showRented.innerText = "[ALUGADO]"

        return showRented
    }

    createRemoveButton() {
        let removeButton = document.createElement("button")
        removeButton.type = "button"
        removeButton.innerText = "Remover"
        removeButton.setAttribute("onclick", "app.removeProperty(this)")

        return removeButton
    }

    removeProperty(button) {
        let liToRemove = button.parentNode
        document.getElementById("property-list").removeChild(liToRemove)
    }

    resetForm() {
        document.querySelector("input[name='area']").value = ""
        document.querySelector("input[name='rented']").checked = false
    }
}