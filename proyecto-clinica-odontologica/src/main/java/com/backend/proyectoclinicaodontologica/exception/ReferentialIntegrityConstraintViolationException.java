package com.backend.proyectoclinicaodontologica.exception;

public class ReferentialIntegrityConstraintViolationException extends Exception {
    public ReferentialIntegrityConstraintViolationException(String message) {
        super(message);
    }
}
