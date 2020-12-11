from rest_framework import serializers 
from echos.models import Echo
 
 
class TutorialSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Echo
        fields = ('id',
                  'message')