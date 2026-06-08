def on_button_a():
    global fahren
    fahren = 1
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    global fahren
    fahren = 0
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

fahren = 0
fahren = 0
basic.show_string("Drücke A", 150)

def on_forever():
    global fahren
    if fahren == 1:
        basic.show_number(fahren, 0)
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 50)
        basic.pause(2400)
        maqueen.motor_stop(maqueen.Motors.ALL)
        fahren = 0
    elif fahren == 0:
        basic.show_number(fahren, 0)
        maqueen.motor_stop(maqueen.Motors.ALL)
basic.forever(on_forever)
