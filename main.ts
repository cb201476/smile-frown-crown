input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.clearScreen()
    radio.sendString("smile")
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.showIcon(IconNames.Happy)
})
radio.setGroup(2)
