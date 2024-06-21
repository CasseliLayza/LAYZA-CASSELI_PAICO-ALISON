package com.backend.proyectoclinicaodontologica.service.impl;

import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;

@Suite
@SelectClasses({PacienteServiceTest.class, OdontologoServiceTest.class, TurnoServiceTest.class})
@TestMethodOrder(MethodOrderer.OrderAnnotation.class) // Esta anotación se aplica a los métodos dentro de una clase de prueba
public class OrderedTestSuite {
}
