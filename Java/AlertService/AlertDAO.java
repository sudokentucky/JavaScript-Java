package Java.AlertService;
import java.util.Date;
import java.util.UUID;
public interface AlertDAO {
    UUID addAlert(Date time);
    Date getAlert(UUID id);
}
