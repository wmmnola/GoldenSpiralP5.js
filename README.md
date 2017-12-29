# GoldenSpiralP5.js

A project which draws the golden spiral. In order to approximate the curve, I used the deriavtive where:

dy = phi^(theta * (2\PI))*cos(theta) + phi^(theta * (2\PI))*sin(theta) * (2/PI) * ln(phi)


dx = dy = phi^(theta * (2\PI))*sin(theta) + phi^(theta * (2\PI))*cos(theta) * (2/PI) * ln(phi)
