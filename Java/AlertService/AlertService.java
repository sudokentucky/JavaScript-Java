package Java.AlertService;

import java.util.Date;
import java.util.UUID;

class AlertService {
    private final AlertDAO alertDAO;

    public AlertService(AlertDAO alertDAO) {
        this.alertDAO = alertDAO;
    }

    public UUID raiseAlert() {
        return alertDAO.addAlert(new Date());
    }

    public Date getAlertTime(UUID id) {
        return alertDAO.getAlert(id);
    }
}


